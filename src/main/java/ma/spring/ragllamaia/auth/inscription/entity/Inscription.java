package ma.spring.ragllamaia.auth.inscription.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "inscription" , schema = "public")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Inscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;
}
