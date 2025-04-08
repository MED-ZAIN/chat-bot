package ma.spring.ragllamaia.web;


import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.repository.CodeRepository;
import ma.spring.ragllamaia.service.ChatAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")

public class ChatRestController {
    private final CodeRepository codeRepository;
    private ChatAiService chatAiService;

    public ChatRestController(ChatAiService chatAiService, CodeRepository codeRepository) {
        this.chatAiService = chatAiService;
        this.codeRepository = codeRepository;
    }


}
