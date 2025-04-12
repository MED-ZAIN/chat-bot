package ma.spring.ragllamaia.auth.inscription.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionRequest;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionResponseDto;
import ma.spring.ragllamaia.auth.inscription.entity.Inscription;
import ma.spring.ragllamaia.auth.inscription.repository.InscriptionRepository;

@Service
@RequiredArgsConstructor
public class InscriptionService {


    private final InscriptionRepository inscriptionRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public InscriptionResponseDto register(InscriptionRequest request) {
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        Inscription inscription = Inscription.builder()
                .username(request.getUsername())
                .password(encodedPassword)  // Enregistrer le mot de passe haché
                .email(request.getEmail())
                .build();

        Inscription saved = inscriptionRepository.save(inscription);

        return InscriptionResponseDto.builder()
                .id(saved.getId())
                .username(saved.getUsername())
                .email(saved.getEmail())
                .build();
    }
}
