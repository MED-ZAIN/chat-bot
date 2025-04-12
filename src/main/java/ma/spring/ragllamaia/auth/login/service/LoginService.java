package ma.spring.ragllamaia.auth.login.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.auth.login.entity.User;
import ma.spring.ragllamaia.auth.login.repository.LoginRepository;
import ma.spring.ragllamaia.auth.login.dto.LoginRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final LoginRepository loginRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Optional<User> authenticate(LoginRequest request) {
        return loginRepository.findByEmail(request.getEmail())
                .filter(user -> passwordEncoder.matches(request.getPassword(), user.getPassword()));  // Comparaison avec le mot de passe haché
    }
}
