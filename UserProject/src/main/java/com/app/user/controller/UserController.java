package com.app.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.user.model.User;
import com.app.user.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id)
    {
    	User user=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found with id: "+id));
    	
		return ResponseEntity.ok(user);
    	
    }
    
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable Long id,@RequestBody User userDetails)
    {
    	User userUpdatedDetails=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found with id: "+id));
    	
    	userUpdatedDetails.setId(userDetails.getId());
    	userUpdatedDetails.setName(userDetails.getName());
    	userUpdatedDetails.setEmail(userDetails.getEmail());
    	
    	userRepository.save(userUpdatedDetails);
    	return ResponseEntity.ok(userUpdatedDetails);
    }
    
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUserById(@PathVariable Long id)
    {
    	User user=userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found with id: "+id));
    	
    	userRepository.delete(user);
    	
    	Map<String, Boolean> response=new HashMap<String,Boolean>();
    	
    	response.put("Deleted", Boolean.TRUE);
    	
    	return ResponseEntity.ok(response);
    }
    
}
