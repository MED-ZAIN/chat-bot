package ma.spring.ragllamaia.web;


import lombok.RequiredArgsConstructor;
import ma.spring.ragllamaia.service.ChatAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")

public class ChatRestController {
    @Autowired
    private ChatAiService chatAiService;

}
