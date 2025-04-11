package ma.spring.ragllamaia.auth.login;

import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.auth.login.dto.LoginRequest;
import ma.spring.ragllamaia.auth.login.dto.LoginResponseDto;
import ma.spring.ragllamaia.auth.login.entity.User;
import ma.spring.ragllamaia.auth.login.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequest request) {
        return loginService.authenticate(request)
                .map(user -> ResponseEntity.ok(
                        LoginResponseDto.builder()
                                .id(user.getId())
                                .email(user.getEmail())
                                .message("Login successful")
                                .build()))
                .orElseGet(() -> ResponseEntity.status(401).body(
                        LoginResponseDto.builder()
                                .message("Invalid email or password")
                                .build()));
    }



}
