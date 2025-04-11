package ma.spring.ragllamaia.auth.login.repository;

import ma.spring.ragllamaia.auth.login.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface LoginRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
