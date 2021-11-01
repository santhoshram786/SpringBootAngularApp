package com.app.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.user.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
