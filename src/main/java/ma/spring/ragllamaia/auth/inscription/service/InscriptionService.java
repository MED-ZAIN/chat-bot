package ma.spring.ragllamaia.auth.inscription.service;

import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionRequest;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionResponseDto;
import ma.spring.ragllamaia.auth.inscription.entity.Inscription;
import ma.spring.ragllamaia.auth.inscription.repository.InscriptionRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InscriptionService {

    private final InscriptionRepository inscriptionRepository;

    public InscriptionResponseDto register(InscriptionRequest request) {
        Inscription inscription = Inscription.builder()
                .username(request.getUsername())
                .password(request.getPassword())
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
