package ma.spring.ragllamaia.auth.login.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponseDto {
    private int id;
    private String email;
    private String message;
}
