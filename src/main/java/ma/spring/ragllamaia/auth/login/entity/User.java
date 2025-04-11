package ma.spring.ragllamaia.auth.login.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users" ,schema ="public")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="email")
    private String email;
    @Column(name = "password")
    private String password;
}
