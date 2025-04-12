package ma.spring.ragllamaia.auth.inscription.dto;

import lombok.Builder;
import lombok.Data;


@Data
@Builder

public class InscriptionResponseDto {
    private int id;
    private String username;
    private String email;


}

