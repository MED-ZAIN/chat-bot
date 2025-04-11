package ma.spring.ragllamaia.auth.inscription;

import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionRequest;
import ma.spring.ragllamaia.auth.inscription.dto.InscriptionResponseDto;
import ma.spring.ragllamaia.auth.inscription.service.InscriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inscription")
@RequiredArgsConstructor
public class InscriptionController {

    private final InscriptionService inscriptionService;

    @PostMapping
    public ResponseEntity<InscriptionResponseDto> inscrire(@RequestBody InscriptionRequest request) {
        InscriptionResponseDto response = inscriptionService.register(request);
        return ResponseEntity.ok(response);
    }


}
