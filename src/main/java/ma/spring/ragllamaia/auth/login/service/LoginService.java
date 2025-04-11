package ma.spring.ragllamaia.auth.login.service;

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

    public Optional<User> authenticate(LoginRequest request) {
        return loginRepository.findByEmail(request.getEmail())
                .filter(user -> user.getPassword().equals(request.getPassword()));
    }


}
