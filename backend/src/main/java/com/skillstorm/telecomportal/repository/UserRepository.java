package com.skillstorm.telecomportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.telecomportal.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    User findByEmail(String email);

	Optional<User> findUserByEmail(String email);
	
	void deleteUserById(Integer id);
	
	@Query("SELECT SUM(p.price) FROM Device d JOIN d.plan p WHERE d.user.id = :id")
	Integer monthlyBill(@Param("id") Integer id);
	
	boolean existsByEmail(String email);
}
