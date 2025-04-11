package ma.spring.ragllamaia.auth.inscription.dto;

import lombok.Data;

@Data
public class InscriptionRequest {
    private String username;
    private String password;
    private String email;
}
