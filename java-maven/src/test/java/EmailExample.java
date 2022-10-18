import com.mailosaur.*;
import com.mailosaur.models.*;
import org.junit.jupiter.api.Test;

import java.io.IOException;

public class TheTest {
    @Test
    void justAnExample() throws MailosaurException, IOException {
        String apiKey = "YOUR_API_KEY";
        String serverId = "YOUR_SERVER_ID";

        // 1. Do something here to send an email to `anything@YOUR_SERVER_ID.mailosaur.net

        // 2. Use Mailosaur to fetch the email
        MailosaurClient mailosaur = new MailosaurClient(apiKey);

        MessageSearchParams params = new MessageSearchParams();
        params.withServer(serverId);

        SearchCriteria criteria = new SearchCriteria();
        criteria.withSentTo("EMAIL_ADDRESS_HERE");

        Message message = mailosaur.messages().get(params, criteria);

        // 3. Start working with the email now that we have it
        System.out.println(message.subject());
    }
}
