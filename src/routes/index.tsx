import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FolderTree, Search, MessageSquareCode, Users, Sparkles, ShieldCheck,
  ArrowUp, ArrowRight, Mail, GraduationCap, Heart, Target, CheckCircle2,
  Image as ImageIcon, PlayCircle, Rocket, BookOpen, Brain, Compass,
  IdCard, School, Phone, Calendar,
} from "lucide-react";
import studentPhoto from "@/assets/student-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio Kỹ thuật số cá nhân" },
      { name: "description", content: "Hành trình học tập môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo — tổng hợp 6 bài tập cuối kỳ, minh chứng và bài học." },
    ],
  }),
  component: PortfolioPage,
});

// ============ DATA ============
const NAV = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "overview", label: "Hành trình" },
  { id: "projects", label: "Dự án" },
  { id: "evidence", label: "Minh chứng" },
  { id: "skills", label: "Kỹ năng" },
  { id: "conclusion", label: "Tổng kết" },
];

const TASKS = [
  { icon: FolderTree, title: "Quản lý tệp & thư mục", desc: "Tổ chức dữ liệu học tập khoa học, đặt tên nhất quán.", tag: "Kỹ năng nền tảng" },
  { icon: Search, title: "Tìm kiếm học thuật", desc: "Sử dụng toán tử nâng cao để lọc nguồn tin cậy.", tag: "Đánh giá thông tin" },
  { icon: MessageSquareCode, title: "Viết Prompt hiệu quả", desc: "So sánh prompt cơ bản và prompt cải tiến.", tag: "Prompt Engineering" },
  { icon: Users, title: "Hợp tác trực tuyến", desc: "Quản lý nhóm, phân công, theo dõi tiến độ.", tag: "Teamwork" },
  { icon: Sparkles, title: "Sáng tạo nội dung với AI", desc: "Sản xuất video/infographic có sự kiểm duyệt cá nhân.", tag: "AI tạo sinh" },
  { icon: ShieldCheck, title: "AI có trách nhiệm", desc: "Bộ nguyên tắc cá nhân về đạo đức AI trong học tập.", tag: "AI Ethics" },
];

const PROJECTS = [
  {
    id: 1,
    icon: FolderTree,
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục trên Windows",
    goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin – thư mục một cách thành thạo trên hệ điều hành Windows.",
    process: [
      "Mở File Explorer bằng tổ hợp phím Windows + E, truy cập ổ đĩa không phải ổ hệ thống (D:/E:) hoặc thư mục Documents.",
      "Tạo thư mục gốc ThucHanh_PhamThiNgocMai, bên trong tạo tệp GhiChu.txt rồi đổi tên thành GhiChuQuanTrong.txt.",
      "Tạo thư mục con TaiLieu, thực hành Copy (Ctrl+C) & Paste (Ctrl+V) và Cut (Ctrl+X) & Paste để sao chép, di chuyển tệp giữa các thư mục.",
      "Xóa tệp vào Recycle Bin (Delete), xóa vĩnh viễn (Shift + Delete) và khôi phục tệp từ Thùng rác bằng lệnh Restore.",
    ],
    tools: ["Windows File Explorer", "Bàn phím tắt (Ctrl+C/V/X, Shift+Delete)", "Recycle Bin"],
    evidence: "Bộ ảnh chụp màn hình 12 bước thao tác thực tế trên máy: tạo thư mục, tạo/đổi tên tệp, copy – cut – paste, xóa và khôi phục.",
    analysis: [
      "Việc phân tách rõ 12 thao tác giúp hình thành thói quen quản lý dữ liệu chuẩn hoá, giảm rủi ro thất lạc tài liệu học tập.",
      "Hiểu bản chất Copy giữ nguyên tệp gốc còn Cut chuyển tệp – tránh nhầm lẫn khi tổ chức dữ liệu.",
      "Nắm được cơ chế Recycle Bin và Shift + Delete để chủ động khi xử lý tệp nhạy cảm hoặc dung lượng lớn.",
    ],
    lesson: [
      "Kỹ năng quản lý tệp là năng lực nền tảng của công dân số, quyết định tốc độ và độ chính xác trong học tập.",
      "Phím tắt và quy tắc đặt tên nhất quán giúp tiết kiệm thời gian đáng kể trong các bài tập dài hạn.",
    ],
    evaluation: {
      strengths: [
        "Hoàn thành đầy đủ 12 thao tác theo yêu cầu đề bài, có ảnh minh chứng cho từng bước.",
        "Đặt tên tệp/thư mục thống nhất theo mẫu ThucHanh_HọTên và mô tả nội dung (GhiChuQuanTrong, DiChuyen).",
        "Thao tác thành thạo phím tắt Ctrl+C/V/X, Shift+Delete và biết cách khôi phục từ Recycle Bin.",
      ],
      improvements: [
        "Có thể mở rộng thêm cách nén (.zip) và chia sẻ thư mục qua OneDrive để tăng tính ứng dụng.",
        "Bổ sung ghi chú README.txt trong mỗi thư mục con để mô tả mục đích lưu trữ.",
      ],
      takeaways: [
        "Recycle Bin là 'lưới an toàn' cho các thao tác xóa nhầm – luôn nên kiểm tra trước khi Shift + Delete.",
        "Cut & Paste là cách di chuyển an toàn hơn kéo–thả khi thư mục đích ở xa vị trí hiện tại.",
      ],
    },
    integrity: {
      aiUsage: [
        "Không sử dụng AI trong bài tập này – toàn bộ là thao tác trực tiếp trên máy tính cá nhân.",
        "Ảnh chụp màn hình được thu trực tiếp từ File Explorer trên Windows của sinh viên.",
      ],
      commitments: [
        "Tôi tự tay thực hiện đủ 12 bước, không nhờ người khác thao tác thay.",
        "Ảnh minh chứng phản ánh đúng thư mục thật đang được sử dụng để học tập.",
        "Trình tự trình bày trong báo cáo trùng khớp với thao tác thực tế đã làm.",
      ],
    },
    tags: ["File Management", "Windows", "Digital Hygiene"],
    progress: 100,
  },
  {
    id: 2,
    icon: Search,
    title: "Bài tập 2 – Tìm kiếm & đánh giá thông tin học thuật (Hành vi người tiêu dùng trong TMĐT)",
    goal: "Xây dựng chiến lược tìm kiếm khoa học và đánh giá độ tin cậy của các nguồn thông tin phục vụ nghiên cứu về hành vi người tiêu dùng trong thương mại điện tử.",
    process: [
      "Xác định vấn đề: nghiên cứu hành vi người tiêu dùng trong TMĐT – có ý nghĩa với doanh nghiệp, nhà quản lý và nhà nghiên cứu kinh tế số.",
      "Chọn 4 nhóm nguồn: (1) CSDL học thuật (Google Scholar, ScienceDirect, Springer), (2) Tạp chí chuyên ngành (MIS Quarterly, Journal of Business Research), (3) Sách chuyên khảo (Kotler, Turban, Laudon), (4) Nguồn mở (OECD, Statista, Nielsen).",
      'Xây dựng từ khoá tiếng Anh: "consumer behavior in e-commerce", "online shopping behavior", "trust in online shopping", "TAM", "TPB".',
      "Đánh giá theo 7 tiêu chí: tính liên quan, độ tin cậy của tác giả, uy tín nơi xuất bản, phương pháp nghiên cứu, số lượng trích dẫn, tính cập nhật và đa dạng loại tài liệu.",
    ],
    tools: ["Google Scholar", "ScienceDirect", "Springer", "OECD / Statista / Nielsen", "Google Consumer Insight"],
    evidence: "Bảng tổng hợp 12 tài liệu tham khảo và bảng đánh giá độ tin cậy theo 4 nhóm nguồn (CSDL học thuật, tạp chí, sách, nguồn mở).",
    analysis: [
      "CSDL học thuật cho độ tin cậy cao nhất vì có tác giả uy tín, phương pháp nghiên cứu rõ ràng và mức trích dẫn cao (ví dụ TAM của Davis 1989, TPB của Ajzen 1991).",
      "Tạp chí chuyên ngành cung cấp nghiên cứu thực nghiệm; sách chuyên khảo cho nền tảng lý thuyết; nguồn mở cập nhật nhanh nhưng cần chọn lọc kỹ.",
      "Kết hợp cả 4 nhóm nguồn đảm bảo tính khoa học, khách quan và cập nhật cho một nghiên cứu về hành vi người tiêu dùng.",
    ],
    lesson: [
      "Chiến lược tìm kiếm quan trọng hơn số lượng từ khoá – tiêu chí đánh giá quyết định chất lượng nghiên cứu.",
      "Ưu tiên tài liệu từ 2015–2024 để đảm bảo tính cập nhật, nhưng vẫn giữ các nghiên cứu kinh điển (Ajzen 1991, Davis 1989) làm khung lý thuyết.",
    ],
    evaluation: {
      strengths: [
        "Xây dựng được 6 từ khoá chuyên ngành và 4 nhóm nguồn tìm kiếm rõ ràng.",
        "Tổng hợp 12 tài liệu đa dạng: sách kinh điển, bài báo peer-review, báo cáo OECD/Nielsen/Statista.",
        "Áp dụng đủ 7 tiêu chí đánh giá và có bảng so sánh độ tin cậy theo từng nhóm nguồn.",
      ],
      improvements: [
        "Nên bổ sung 1–2 nghiên cứu về TMĐT tại Việt Nam để tăng tính bối cảnh hoá.",
        "Có thể sử dụng Google Scholar Alerts để cập nhật liên tục các bài mới về hành vi TMĐT.",
      ],
      takeaways: [
        "Kết hợp sách nền tảng (Kotler, Turban, Laudon) với bài báo mới giúp vừa vững lý thuyết vừa cập nhật thực tiễn.",
        "Nguồn Internet chỉ nên dùng khi truy được cơ quan xuất bản uy tín (OECD, Nielsen, Google Research).",
      ],
    },
    integrity: {
      aiUsage: [
        "AI chỉ được dùng để gợi ý từ khoá đồng nghĩa tiếng Anh và dịch thuật ngữ chuyên ngành.",
        "Việc chọn, đọc và đánh giá độ tin cậy của 12 nguồn do tôi trực tiếp thực hiện.",
      ],
      commitments: [
        "Tôi tự đọc tối thiểu phần Abstract và Kết luận của các bài báo trước khi đưa vào bảng.",
        "Bảng đánh giá và nhận xét độ tin cậy do tôi viết, không sao chép nguyên văn từ AI.",
        "Danh mục tài liệu tham khảo được trình bày đúng chuẩn APA.",
      ],
    },
    tags: ["Source Evaluation", "E-commerce", "Consumer Behavior", "Academic Search"],
    progress: 100,
    table: {
      caption: "Bảng tổng hợp tài liệu tham khảo (12 nguồn)",
      headers: ["STT", "Tác giả", "Năm", "Nguồn", "Loại", "Nội dung", "Độ tin cậy"],
      rows: [
        ["1", "Kotler & Keller", "2016", "Pearson", "Sách", "Lý thuyết hành vi người tiêu dùng, quá trình quyết định mua", "Rất cao"],
        ["2", "Ajzen", "1991", "Academic Press", "Bài báo KH", "Theory of Planned Behavior (TPB)", "Rất cao"],
        ["3", "Davis", "1989", "MIS Quarterly", "Bài báo KH", "Technology Acceptance Model (TAM)", "Rất cao"],
        ["4", "Turban et al.", "2018", "Springer", "Sách", "Thương mại điện tử & khách hàng online", "Rất cao"],
        ["5", "Laudon & Traver", "2021", "Pearson", "Sách", "Hành vi người tiêu dùng trong TMĐT", "Rất cao"],
        ["6", "Gefen et al.", "2003", "MIS Quarterly", "Bài báo KH", "Niềm tin trong mua hàng online (Trust & TAM)", "Cao"],
        ["7", "Chen & Dubinsky", "2003", "J. Business Research", "Bài báo KH", "Giá trị cảm nhận trong TMĐT", "Cao"],
        ["8", "Kim et al.", "2010", "Info. Systems Research", "Bài báo KH", "Trust & Satisfaction trong TMĐT", "Cao"],
        ["9", "OECD", "2022", "OECD Report", "Báo cáo", "Digital Economy Outlook 2022", "Cao"],
        ["10", "Statista", "2023", "Statista", "Dữ liệu", "Thống kê mua sắm trực tuyến toàn cầu", "Cao"],
        ["11", "Nielsen", "2022", "Nielsen Report", "Báo cáo", "Global Consumer Behavior Report", "Cao"],
        ["12", "Google", "2023", "Think with Google", "Dữ liệu", "Xu hướng mua hàng online (Consumer Insights)", "Khá cao"],
      ],
    },
  },
  {
    id: 3,
    icon: MessageSquareCode,
    title: "Bài tập 3 – Ứng dụng kỹ năng viết Prompt trong học tập",
    goal: "Xây dựng và thử nghiệm ba cấp độ prompt (cơ bản – cải tiến – nâng cao) cho ba tác vụ học tập phổ biến, từ đó rút ra nguyên tắc viết prompt hiệu quả.",
    process: [
      "Chọn 3 tác vụ học tập: (1) Tóm tắt tài liệu học thuật, (2) Giải thích khái niệm phức tạp ('Học sâu'), (3) Tạo bộ câu hỏi ôn tập.",
      "Với mỗi tác vụ, viết 3 phiên bản prompt: cơ bản (ngắn, chung chung), cải tiến (thêm số câu, độ dài), nâng cao (thêm vai trò, cấu trúc bullet, phân loại độ khó).",
      "Chạy đồng thời 9 prompt trên ChatGPT, chụp lại đầu ra và so sánh theo bảng tiêu chí (đầy đủ ý, rõ ràng, cấu trúc, hỗ trợ học tập).",
      "Rút ra 6 nguyên tắc viết prompt hiệu quả: cụ thể, có vai trò, cấu trúc rõ, định hướng đầu ra, mức độ tư duy, kiểm tra & điều chỉnh.",
    ],
    tools: ["ChatGPT", "Bảng so sánh tiêu chí", "Kỹ thuật Role prompting"],
    evidence: "Ảnh chụp 9 lượt hội thoại với ChatGPT + 3 bảng so sánh 4 tiêu chí cho từng tác vụ (tóm tắt, giải thích, câu hỏi ôn tập).",
    analysis: [
      "Prompt cơ bản thường bỏ sót ý, không phân biệt được ý chính – ý phụ, đầu ra chung chung.",
      "Prompt cải tiến giúp AI đưa ra kết quả đầy đủ hơn nhưng vẫn thiếu cấu trúc rõ ràng.",
      "Prompt nâng cao (có vai trò + bullet + phân loại nhận biết/thông hiểu/vận dụng/vận dụng cao) cho kết quả sâu, đầy đủ và dễ ôn tập nhất.",
    ],
    lesson: [
      "Muốn AI trả lời tốt, phải đặt câu hỏi tốt – prompt tốt như một bản mô tả yêu cầu công việc rõ ràng.",
      "Vai trò (Role prompting) + cấu trúc bullet + định hướng đầu ra là ba yếu tố quyết định chất lượng đầu ra.",
    ],
    evaluation: {
      strengths: [
        "Thử nghiệm đủ 3 cấp độ prompt trên 3 tác vụ khác nhau – tổng cộng 9 lượt thử.",
        "Có bảng so sánh định tính (Thấp/Trung bình/Cao) theo 4 tiêu chí cho từng tác vụ.",
        "Rút ra được 6 nguyên tắc viết prompt có thể áp dụng lại cho các bài tập khác.",
      ],
      improvements: [
        "Nên bổ sung số liệu định lượng (thời gian đọc, số ý đúng) để so sánh khách quan hơn.",
        "Có thể thử thêm trên Gemini hoặc Claude để đối chiếu giữa các mô hình.",
      ],
      takeaways: [
        "Cùng chủ đề, prompt khác nhau cho ra kết quả rất khác về chất lượng.",
        "Prompt nâng cao có phân loại theo 4 mức tư duy (Bloom) rất hiệu quả cho việc tự ôn tập.",
      ],
    },
    integrity: {
      aiUsage: [
        "AI (ChatGPT) đóng đúng vai trò công cụ: nhận prompt, trả kết quả.",
        "Tôi là người thiết kế prompt, xây dựng tiêu chí đánh giá và viết phần nhận xét.",
      ],
      commitments: [
        "9 prompt và toàn bộ bảng so sánh do tôi tự viết.",
        "Ảnh chụp màn hình hội thoại ChatGPT là dữ liệu thật, không chỉnh sửa nội dung đầu ra.",
        "Không sao chép nguyên văn đầu ra AI vào báo cáo khi chưa biên tập lại.",
      ],
    },
    tags: ["Prompt Engineering", "AI Literacy", "Bloom's Taxonomy"],
    progress: 100,
    prompts: {
      original: 'Tóm tắt đoạn văn sau một cách ngắn gọn.',
      improved:
        'Bạn là một chuyên gia học thuật. Hãy tóm tắt văn bản theo cấu trúc: (1) 3 ý chính, (2) 2 luận điểm quan trọng, (3) 1 câu kết luận. Ngôn ngữ rõ ràng, có bullet points, mỗi ý không quá 2 dòng.',
      table: {
        headers: ["Tiêu chí", "Cơ bản", "Cải tiến", "Nâng cao"],
        rows: [
          ["Đầy đủ ý", "Thấp", "Trung bình", "Cao"],
          ["Rõ ràng", "Thấp", "Khá", "Rất cao"],
          ["Cấu trúc", "Không có", "Một phần", "Rõ ràng"],
          ["Hỗ trợ học tập", "Kém", "Khá", "Rất tốt"],
        ],
      },
    },
  },
  {
    id: 4,
    icon: Users,
    title: "Bài tập 4 – Trải nghiệm hợp tác trực tuyến trong dự án nhóm",
    goal: "Điều phối dự án nhóm với vai trò trưởng nhóm (leader) qua bộ 4 công cụ trực tuyến, đảm bảo tiến độ và chất lượng đầu ra.",
    process: [
      "Chủ đề nhóm: 'Ứng dụng AI và công nghệ số trong lĩnh vực Khoa học sức khoẻ và Sự sống' – tập trung thực tế tại Việt Nam (chẩn đoán hình ảnh y khoa, giảm tải bệnh viện).",
      "Trello: tạo bảng 3 cột (To-do / Doing / Done), phân công deadline rõ ràng cho từng thành viên, cập nhật ≥ 3 lần/tuần với vai trò leader.",
      "Google Docs: tạo tài liệu chung, phân chia phần viết, comment & chỉnh sửa trực tiếp; Google Drive: tổ chức thư mục CNS (Nhóm 7) với các thư mục con Tiến độ hoàn thành / Báo cáo / Nộp video / Phân công nhiệm vụ.",
      "Google Meet: điều phối các buổi họp trực tuyến, chia sẻ màn hình, giải quyết mâu thuẫn khi các thành viên tranh luận về hướng triển khai.",
    ],
    tools: ["Trello (quản lý dự án)", "Google Docs (soạn thảo)", "Google Drive (lưu trữ)", "Google Meet (giao tiếp)"],
    evidence: "Ảnh chụp bảng Trello phân công, giao diện Google Docs với comment, cấu trúc thư mục Google Drive và cuộc họp Google Meet.",
    analysis: [
      "Trello giúp minh bạch tiến độ và phát hiện sớm các nhiệm vụ chậm; hạn chế là không hiển thị % hoàn thành chi tiết.",
      "Google Docs cho phép nhiều thành viên viết song song và kiểm soát chất lượng qua lịch sử chỉnh sửa – công cụ then chốt của leader.",
      "Bộ 4 công cụ tạo thành một hệ sinh thái làm việc hoàn chỉnh: quản lý – soạn thảo – lưu trữ – giao tiếp.",
    ],
    lesson: [
      "Kỹ năng lãnh đạo và phân chia công việc rõ ràng là yếu tố then chốt của một dự án nhóm trực tuyến.",
      "Giao tiếp chủ động và lắng nghe – tổng hợp ý kiến giúp giảm mâu thuẫn khi các thành viên có quan điểm khác nhau.",
    ],
    evaluation: {
      strengths: [
        "Với vai trò leader, đảm bảo được tiến độ toàn nhóm và tương tác ≥ 10 lần/tuần theo tiêu chí đề bài.",
        "Sử dụng phối hợp cả 4 công cụ, mỗi công cụ đảm nhiệm một chức năng rõ ràng.",
        "Xử lý tốt tình huống tranh luận: lắng nghe → tổng hợp → chọn phương án chung → phân chia lại công việc.",
      ],
      improvements: [
        "Nên bổ sung Google Meet Recording để lưu lại nội dung họp thay vì chỉ ghi biên bản.",
        "Có thể thêm cột 'Review' trước 'Done' trên Trello để tăng chất lượng kiểm duyệt bài.",
      ],
      takeaways: [
        "Sự hợp tác và tinh thần trách nhiệm của từng cá nhân quyết định thành công của dự án nhóm.",
        "Công cụ phù hợp giúp tối ưu hoá quy trình – nhưng công cụ không thay thế được kỹ năng lãnh đạo và giao tiếp.",
      ],
    },
    integrity: {
      aiUsage: [
        "Không dùng AI để phân công công việc thay cho nhóm hoặc viết thay báo cáo cá nhân.",
        "AI chỉ hỗ trợ gợi ý mẫu bảng Trello và cách viết deadline cho card.",
      ],
      commitments: [
        "Việc phân công và quyết định phương án là thống nhất của cả nhóm.",
        "Ảnh chụp Trello, Google Docs, Drive, Meet là dữ liệu thật từ dự án nhóm đang thực hiện.",
        "Trạng thái công việc trên Trello được cập nhật đúng thực tế triển khai.",
      ],
    },
    tags: ["Collaboration", "Leadership", "Project Management", "Digital Teamwork"],
    progress: 100,
    team: {
      caption: "Bảng phân công nhóm (Chủ đề: AI trong Khoa học sức khoẻ)",
      headers: ["Thành viên", "Vai trò / Nhiệm vụ", "Deadline", "Yêu cầu tương tác"],
      rows: [
        ["Phạm Thị Ngọc Mai", "Nhóm trưởng – lên ý tưởng, phân công, tổng hợp & viết báo cáo", "Nháp Ngày 2 – Hoàn thiện Ngày 6", "≥ 10 lần/tuần, cập nhật Trello ≥ 3 lần/tuần"],
        ["Nguyễn Quang Minh", "Hỗ trợ ý tưởng, trình bày ứng dụng AI thực tế, chỉnh sửa bài", "Nháp Ngày 3 – Hoàn thiện Ngày 5", "≥ 5 lần/tuần, cập nhật tiến độ ≥ 3 lần"],
        ["Thành viên 3", "Nghiên cứu ứng dụng AI trong chẩn đoán hình ảnh y khoa", "Ngày 5", "≥ 5 lần/tuần"],
        ["Thành viên 4", "Thiết kế slide & minh hoạ", "Ngày 6", "≥ 5 lần/tuần"],
        ["Thành viên 5", "Kiểm tra chính tả, đối chiếu tài liệu tham khảo, nộp bài", "Ngày 7", "≥ 5 lần/tuần"],
      ],
    },
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Bài tập 5 – Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số",
    goal: "Thiết kế một sản phẩm infographic với chủ đề 'Ứng dụng AI trong học tập của sinh viên' bằng cách phối hợp ba công cụ AI tạo sinh và đánh giá vai trò của AI trong sáng tạo.",
    process: [
      "Bước 1 – ChatGPT: viết prompt yêu cầu nội dung infographic gồm 5 mục (định nghĩa AI, công cụ phổ biến, lợi ích, rủi ro, cách dùng hiệu quả); rút gọn câu để phù hợp định dạng infographic.",
      "Bước 2 – Adobe Firefly: tạo hình minh hoạ với prompt 'modern flat illustration of students using AI tools, colorful, minimal, infographic style'; thử nhiều lần để chọn ảnh phù hợp nhất.",
      "Bước 3 – Canva AI: chọn template, chèn nội dung từ ChatGPT, thêm hình từ Firefly; đồng bộ màu sắc pastel (xanh – tím), thêm icon, sắp xếp bố cục dễ đọc.",
      "Bước 4 – Kiểm duyệt cá nhân: rút gọn câu, đồng bộ font/màu, đối chiếu thông tin và xuất bản sản phẩm cuối.",
    ],
    tools: ["ChatGPT (nội dung)", "Adobe Firefly (hình ảnh)", "Canva AI (thiết kế)"],
    evidence: "Ảnh chụp hội thoại ChatGPT, kết quả Adobe Firefly, giao diện Canva AI với 4 phương án infographic và bản infographic cuối cùng.",
    analysis: [
      "ChatGPT: bố cục nội dung rõ ràng, tiết kiệm thời gian, nhưng một số câu còn dài – cần tinh gọn cho infographic.",
      "Adobe Firefly: hình đẹp và hiện đại, nhưng chất lượng phụ thuộc mạnh vào cách viết prompt – phải thử nhiều lần.",
      "Canva AI: giao diện thân thiện, nhiều template; tuy nhiên vẫn cần chỉnh sửa thủ công để đạt độ hoàn thiện cao.",
    ],
    lesson: [
      "AI rút ngắn quy trình sáng tạo, cho phép tập trung vào khâu chỉnh sửa và phát triển ý tưởng đột phá.",
      "AI không thay thế con người – yếu tố sáng tạo và tư duy cá nhân vẫn quyết định chất lượng sản phẩm cuối.",
    ],
    evaluation: {
      strengths: [
        "Phối hợp 3 công cụ AI cho 3 khâu khác nhau: nội dung – hình ảnh – thiết kế.",
        "Có bước kiểm duyệt cá nhân sau mỗi khâu để đảm bảo đầu ra phù hợp.",
        "Sản phẩm cuối là infographic hoàn chỉnh 5 mục, màu sắc pastel hài hoà, có icon minh hoạ.",
      ],
      improvements: [
        "Firefly cần thử thêm prompt tiếng Việt / bối cảnh Việt Nam để ảnh sát chủ đề sinh viên VN.",
        "Nên ghi rõ nguồn công cụ AI ngay trên infographic (credit AI tools).",
      ],
      takeaways: [
        "Kết hợp AI + tư duy cá nhân giúp tạo sản phẩm nhanh mà vẫn giữ được dấu ấn cá nhân.",
        "Prompt càng cụ thể (phong cách, màu sắc, số mục) thì đầu ra AI càng bám sát ý tưởng ban đầu.",
      ],
    },
    integrity: {
      aiUsage: [
        "ChatGPT viết nháp nội dung, Adobe Firefly tạo hình minh hoạ, Canva AI dựng bố cục.",
        "Tôi trực tiếp chỉnh sửa câu chữ, chọn ảnh, đồng bộ màu và chịu trách nhiệm với sản phẩm cuối.",
      ],
      commitments: [
        "Toàn bộ prompt và bước chỉnh sửa do tôi tự thực hiện.",
        "Ghi rõ 3 công cụ AI đã sử dụng trong phần mô tả sản phẩm.",
        "Không sử dụng hình ảnh vi phạm bản quyền – chỉ dùng đầu ra AI được cấp quyền.",
      ],
    },
    tags: ["Generative AI", "Infographic", "Human-in-the-loop", "Content Creation"],
    progress: 100,
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Phân tích chính sách của VNU (đối chiếu Oxford), thực hành sử dụng AI có trách nhiệm cho một nhiệm vụ học tập và đề xuất bộ nguyên tắc cá nhân.",
    process: [
      "Nghiên cứu chính sách AI của Đại học Quốc gia Hà Nội (VNU): AI là công cụ hỗ trợ, sinh viên chịu trách nhiệm cuối cùng, phải minh bạch trích dẫn, nghiêm cấm gian lận, duy trì tư duy phản biện.",
      "So sánh với University of Oxford: cả hai đều theo mô hình 'sử dụng AI có kiểm soát' thay vì cấm tuyệt đối; điểm chung là yêu cầu minh bạch và trách nhiệm cá nhân.",
      "Thực hành: viết bài tổng hợp về chủ đề 'Giữ gìn và phát huy bản sắc văn hoá dân tộc Việt Nam trong thời đại hội nhập' với sự hỗ trợ của ChatGPT & Gemini.",
      "Quy trình 4 bước: (1) đặt prompt → (2) phân tích & chọn lọc → (3) viết lại bằng ngôn ngữ cá nhân → (4) trích dẫn minh bạch việc sử dụng AI.",
    ],
    tools: ["ChatGPT", "Google Gemini", "Chính sách VNU", "Hướng dẫn của Oxford & UNESCO"],
    evidence: "Bảng so sánh chính sách VNU – Oxford, 3 prompt thử nghiệm + đánh giá đầu ra AI, bộ nguyên tắc cá nhân và trích dẫn minh bạch trong báo cáo.",
    analysis: [
      "Ranh giới giữa hỗ trợ hợp lý (gợi ý ý tưởng, dàn ý, kiểm tra ngữ pháp) và gian lận (nộp nguyên văn AI, dùng trong thi cử) cần được xác định rõ.",
      "Lạm dụng AI khiến khả năng tư duy độc lập, kỹ năng viết học thuật và ghi nhớ kiến thức bị suy giảm; AI đôi khi tạo thông tin sai nhưng thuyết phục – phải kiểm chứng.",
      "Sử dụng AI đúng cách giúp tiếp cận kiến thức nhanh, hỗ trợ ngoại ngữ và cá nhân hoá học tập.",
    ],
    lesson: [
      "AI nên được xem là 'trợ lý học tập' chứ không phải 'người làm thay'.",
      "Trung thực học thuật và tư duy phản biện là ranh giới không thể thoả hiệp với bất kỳ công cụ nào.",
    ],
    evaluation: {
      strengths: [
        "So sánh có chiều sâu giữa chính sách VNU và Oxford, chỉ ra được điểm chung 'AI có kiểm soát'.",
        "Thực hành đầy đủ 3 prompt trên một chủ đề học thuật thật, có đánh giá & chỉnh sửa đầu ra.",
        "Bộ 7 nguyên tắc cá nhân bao phủ đủ các nhóm rủi ro: đạo văn, phụ thuộc, sai lệch, quyền riêng tư.",
      ],
      improvements: [
        "Cần cụ thể hoá mẫu trích dẫn AI khi nộp bài (ví dụ APA style cho ChatGPT).",
        "Bổ sung tình huống mô phỏng (case study) để kiểm tra tính khả thi của nguyên tắc.",
      ],
      takeaways: [
        "AI không bị cấm hoàn toàn mà cần được sử dụng có kiểm soát và minh bạch.",
        "Người học phải duy trì tư duy độc lập – AI chỉ hỗ trợ, không thay thế năng lực cá nhân.",
      ],
    },
    integrity: {
      aiUsage: [
        "Bài này thảo luận VỀ AI – phần phân tích chính sách và đạo đức do tôi tự viết.",
        "AI được dùng minh bạch trong phần thực hành (prompt về văn hoá dân tộc); mọi đầu ra AI đều được chỉnh sửa và trích dẫn rõ.",
      ],
      commitments: [
        "Cam kết tuân thủ 7 nguyên tắc đã đặt ra trong suốt quá trình học môn này và các môn khác.",
        "Luôn ghi rõ vai trò AI trong mọi sản phẩm học tập có sử dụng AI (mẫu: 'Bài viết có sử dụng ChatGPT/Gemini để hỗ trợ...').",
        "Chịu trách nhiệm cuối cùng với mọi bài nộp dù có hay không có AI hỗ trợ.",
      ],
    },
    tags: ["AI Ethics", "Academic Integrity", "VNU Policy", "Digital Citizenship"],
    progress: 100,
    principles: [
      "AI chỉ là công cụ hỗ trợ, không thay thế tư duy con người.",
      "Luôn kiểm chứng thông tin do AI cung cấp bằng nhiều nguồn tin cậy.",
      "Ghi rõ và trích dẫn minh bạch khi có sử dụng AI trong học tập, nghiên cứu.",
      "Không nhập dữ liệu cá nhân, thông tin nhạy cảm hay bí mật vào AI.",
      "Không sao chép nguyên văn đầu ra AI – phải viết lại bằng ngôn ngữ cá nhân.",
      "Không dùng AI để gian lận thi cử hoặc làm thay toàn bộ bài tập.",
      "Chịu trách nhiệm cuối cùng đối với sản phẩm học tập của bản thân.",
    ],
  },
];



const EVIDENCE = [
  { title: "Cấu trúc thư mục học tập", desc: "Sơ đồ phân cấp và quy tắc đặt tên tệp." },
  { title: "Kết quả tìm kiếm học thuật", desc: "Ảnh minh hoạ truy vấn với toán tử nâng cao." },
  { title: "So sánh Prompt", desc: "Prompt gốc và prompt cải tiến — kết quả AI." },
  { title: "Bảng quản lý công việc nhóm", desc: "Ảnh chụp Trello/Notion với các cột trạng thái." },
  { title: "Sản phẩm AI tạo sinh", desc: "Video/infographic được sản xuất kèm biên tập cá nhân." },
  { title: "Bộ nguyên tắc AI cá nhân", desc: "Poster 7 điều về sử dụng AI có trách nhiệm." },
];

const SKILLS = [
  { name: "Quản lý tệp và dữ liệu số", level: 92, use: "Tổ chức tài liệu học tập, dự án cá nhân." },
  { name: "Tìm kiếm thông tin học thuật", level: 90, use: "Nghiên cứu, viết tiểu luận, làm khoá luận." },
  { name: "Đánh giá độ tin cậy nguồn", level: 88, use: "Phân biệt thông tin đúng/sai, phản biện." },
  { name: "Viết Prompt hiệu quả", level: 90, use: "Học tập, sáng tạo nội dung, giải quyết vấn đề." },
  { name: "Làm việc nhóm trực tuyến", level: 87, use: "Quản lý dự án, phối hợp đa thành viên." },
  { name: "Sáng tạo nội dung số bằng AI", level: 85, use: "Sản xuất video, infographic, thuyết trình." },
  { name: "Sử dụng AI có trách nhiệm", level: 93, use: "Bảo đảm liêm chính học thuật, an toàn dữ liệu." },
  { name: "Tự đánh giá & cải thiện bản thân", level: 89, use: "Lập kế hoạch học tập, phát triển bền vững." },
];

// ============ HELPERS ============
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============ MAIN ============
function PortfolioPage() {
  const [showTop, setShowTop] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Back-to-top + section spy
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const ids = NAV.map((n) => n.id);
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Navbar active={activeSection} />
      <Hero />
      <About />
      <Overview />
      <Projects onOpen={setActiveProject} />
      <Evidence />
      <SkillsSection />
      <Conclusion />
      <Footer />

      {/* Back to top */}
      <button
        onClick={() => scrollToId("hero")}
        aria-label="Quay lại đầu trang"
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-110 ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Project modal */}
      {activeProject !== null && (
        <ProjectModal
          project={PROJECTS[activeProject]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

// ============ NAVBAR ============
function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollToId("hero")}
          className="flex min-w-0 items-center gap-2 font-bold"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="truncate text-sm sm:text-base">Portfolio</span>
        </button>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollToId(n.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-lg border border-border bg-card px-3 py-1.5 text-sm"
          aria-label="Mở menu"
        >
          {open ? "Đóng" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 px-4 py-3">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(n.id), 50);
                  }}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-accent"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="animate-blob absolute -top-24 -left-24 h-96 w-96 bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob absolute -bottom-32 -right-24 h-[28rem] w-[28rem] bg-secondary/30 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
          </div>
          <h1
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Portfolio{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Kỹ thuật số
            </span>{" "}
            cá nhân
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Hành trình học tập môn <em>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</em> —
            tổng hợp 6 bài tập cuối kỳ, minh chứng, phân tích và bài học rút ra qua một sản phẩm số hoàn chỉnh.
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            Portfolio là nơi em lưu trữ, trình bày và tự đánh giá quá trình học tập — thể hiện năng lực
            vận dụng công cụ số và AI một cách chủ động, sáng tạo và có trách nhiệm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { id: "about", label: "Giới thiệu", icon: Heart },
              { id: "projects", label: "Dự án học tập", icon: Rocket },
              { id: "evidence", label: "Minh chứng", icon: ImageIcon },
              { id: "conclusion", label: "Tổng kết", icon: BookOpen },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => scrollToId(b.id)}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.03] hover:shadow-[var(--shadow-elegant)]"
              >
                <b.icon className="h-4 w-4" />
                {b.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "6", l: "Bài tập" },
              { n: "8+", l: "Kỹ năng" },
              { n: "100%", l: "Hoàn thành" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card/70 p-4 text-center backdrop-blur">
                <div className="text-2xl font-extrabold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration */}
        <div className="reveal relative flex justify-center">
          <div className="animate-float relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/40 blur-2xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[3rem] border border-white/60 bg-white/70 p-8 shadow-[var(--shadow-elegant)] backdrop-blur-xl">
              <div className="grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
                <Brain className="h-14 w-14" />
              </div>
              <div className="mt-6 text-center">
                <div className="text-lg font-bold">AI × Học tập số</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Sáng tạo · Phản biện · Trách nhiệm
                </div>
              </div>
              <div className="mt-6 grid w-full grid-cols-3 gap-3">
                {[FolderTree, Search, Users, MessageSquareCode, Sparkles, ShieldCheck].map((Ic, i) => (
                  <div
                    key={i}
                    className="grid aspect-square place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary"
                  >
                    <Ic className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          kicker="Giới thiệu"
          title="About Me"
          subtitle="Card cá nhân với thông tin học tập, sở thích và mục tiêu Portfolio."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Avatar card */}
          <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ring-4 ring-primary/20">
              <img src={studentPhoto.url} alt="Ảnh sinh viên Phạm Thị Ngọc Mai" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">Phạm Thị Ngọc Mai</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sinh viên · Học tập chủ động với công nghệ số & AI
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <InfoRow icon={School} label="Trường" value="Đại học Kinh tế - ĐHQGHN" />
              <InfoRow icon={GraduationCap} label="Khoa" value="Khoa Kinh tế Phát triển" />
              <InfoRow icon={Users} label="Lớp" value="QH-2025-E KTPT7" />
              <InfoRow icon={IdCard} label="Mã sinh viên (MSV)" value="25050668" />
              <InfoRow icon={Mail} label="Email" value="25050668@vnu.edu.vn" />
            </ul>
          </div>

          {/* Details */}
          <div className="grid gap-6">
            <div className="reveal rounded-3xl border border-border bg-card p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <Heart className="h-5 w-5 text-primary" /> Sở thích cá nhân
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Học công nghệ số",
                  "Khám phá AI",
                  "Sáng tạo nội dung",
                  "Quản lý dữ liệu",
                  "Làm việc nhóm",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal rounded-3xl border border-border bg-card p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <Target className="h-5 w-5 text-secondary" /> Mục tiêu Portfolio
              </h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Hệ thống hoá toàn bộ bài tập cuối kỳ.",
                  "Chứng minh năng lực dùng công cụ số & AI.",
                  "Lưu trữ sản phẩm cá nhân — dễ chia sẻ & phát triển.",
                  "Rèn kỹ năng trình bày, phân tích, phản biện, tự đánh giá.",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-2 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-3xl border border-border bg-card p-6">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <Rocket className="h-5 w-5 text-primary" /> Mục tiêu học tập
              </h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Nắm vững nền tảng công nghệ số và tư duy dữ liệu trong Kinh tế phát triển.",
                  "Ứng dụng AI vào phân tích, nghiên cứu và ra quyết định kinh tế.",
                  "Rèn kỹ năng tự học chủ động, phản biện và giải quyết vấn đề thực tế.",
                  "Xây dựng thương hiệu học thuật cá nhân, sẵn sàng cho nghiên cứu và nghề nghiệp.",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-2 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 p-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" /> Câu nói tâm đắc về AI
                </div>
                <blockquote className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-foreground sm:text-2xl">
                  <span className="text-3xl leading-none text-primary">“</span>
                  AI không thay thế con người, nhưng những người biết dùng AI sẽ thay thế những người không biết dùng nó. Với tôi, học AI là học cách tư duy nhanh hơn, sâu hơn và nhân văn hơn.
                  <span className="text-3xl leading-none text-primary">”</span>
                </blockquote>
                <div className="mt-3 text-sm text-muted-foreground">— Suy ngẫm cá nhân trong hành trình học môn Nhập môn Công nghệ số & AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: any) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-muted/50 px-3 py-2">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </li>
  );
}

// ============ OVERVIEW / TIMELINE ============
function Overview() {
  return (
    <section id="overview" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          kicker="Hành trình"
          title="Tổng quan 6 nhiệm vụ học tập"
          subtitle="Timeline khép kín từ kỹ năng nền tảng đến AI có trách nhiệm."
        />
        <div className="relative mt-14">
          {/* line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-secondary lg:left-1/2 lg:-translate-x-1/2" />
          <ul className="space-y-10">
            {TASKS.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <li
                  key={t.title}
                  className={`reveal relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 lg:grid-cols-2 lg:gap-10`}
                >
                  {/* dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg -translate-x-1/2">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className={`col-start-2 lg:col-start-1 ${left ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}`}>
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                      <div className={`flex flex-col ${left ? "lg:items-end" : "lg:items-start"} items-start`}>
                        <div className="flex items-center gap-2">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                            Nhiệm vụ {i + 1}
                          </span>
                        </div>
                        <h4 className="mt-3 text-lg font-bold">{t.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground max-w-md">{t.desc}</p>
                        <span className="mt-3 rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {t.tag}
                        </span>
                        <button
                          onClick={() => scrollToId("projects")}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                        >
                          Xem chi tiết <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS ============
function Projects({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          kicker="Dự án"
          title="Dự án của một hành trình"
          subtitle="Mỗi bài tập gồm mục tiêu, quá trình, công cụ, minh chứng, phân tích và bài học."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="reveal group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-md">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Bài tập {p.id}
                    </div>
                    <h3 className="truncate font-bold">{p.title.replace(/^Bài tập \d+ – /, "")}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{p.goal}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Tiến độ</span>
                    <span className="font-semibold text-primary">{p.progress}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => onOpen(i)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition group-hover:shadow-md"
                >
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ PROJECT MODAL ============
function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const Icon = project.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-elegant)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-muted text-sm hover:bg-accent"
          aria-label="Đóng"
        >
          ✕
        </button>
        <div className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
            <Icon className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Bài tập {project.id}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">{project.title}</h3>
          </div>
        </div>

        <Block title="🎯 Mục tiêu">
          <p className="text-sm leading-relaxed">{project.goal}</p>
        </Block>

        <Block title="⚙️ Quá trình thực hiện">
          <ol className="space-y-2 text-sm">
            {project.process.map((s: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="🛠️ Công cụ sử dụng">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t: string) => (
              <span key={t} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </Block>

        {project.table && <TableBlock data={project.table} />}
        {project.team && <TableBlock data={project.team} />}

        {project.prompts && (
          <Block title="💬 So sánh Prompt">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-4">
                <div className="text-xs font-semibold text-muted-foreground">Prompt ban đầu</div>
                <p className="mt-2 text-sm italic">"{project.prompts.original}"</p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                <div className="text-xs font-semibold text-primary">Prompt cải tiến</div>
                <p className="mt-2 text-sm italic">"{project.prompts.improved}"</p>
              </div>
            </div>
            <div className="mt-4">
              <TableBlock data={project.prompts.table} noWrap />
            </div>
          </Block>
        )}

        {project.principles && (
          <Block title="🛡️ Bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm">
            <ol className="grid gap-2 sm:grid-cols-2">
              {project.principles.map((p: string, i: number) => (
                <li key={i} className="flex gap-3 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-3 text-sm">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary/25 text-xs font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block title="📸 Minh chứng">
          <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center">
            <ImageIcon className="mx-auto h-8 w-8 text-primary/60" />
            <p className="mt-2 text-sm text-muted-foreground">{project.evidence}</p>
            <p className="mt-1 text-xs text-muted-foreground italic">
              (Placeholder — thay bằng minh chứng thật khi nộp)
            </p>
          </div>
        </Block>

        <Block title="🔍 Phân tích">
          <ul className="space-y-2 text-sm">
            {project.analysis.map((a: string, i: number) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="✨ Bài học rút ra">
          <ul className="space-y-2 text-sm">
            {project.lesson.map((l: string, i: number) => (
              <li key={i} className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Block>

        {project.evaluation && (
          <Block title="📊 Phân tích – Đánh giá">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <CheckCircle2 className="h-4 w-4" /> Điểm tốt
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {project.evaluation.strengths.map((s: string, i: number) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-secondary/25 bg-secondary/5 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                  <Target className="h-4 w-4 text-secondary" /> Cần cải thiện
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {project.evaluation.improvements.map((s: string, i: number) => (
                    <li key={i} className="flex gap-2"><span className="text-secondary">•</span><span>{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Sparkles className="h-4 w-4 text-primary" /> Bài học rút ra
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {project.evaluation.takeaways.map((s: string, i: number) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{s}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </Block>
        )}

        {project.integrity && (
          <Block title="🛡️ Liêm chính học thuật & Sử dụng AI">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-sm font-bold">Cách tôi sử dụng AI:</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {project.integrity.aiUsage.map((s: string, i: number) => (
                  <li key={i} className="flex gap-2"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{s}</span></li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-bold">Cam kết liêm chính:</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {project.integrity.commitments.map((s: string, i: number) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /><span>{s}</span></li>
                ))}
              </ul>
            </div>
          </Block>
        )}

        <Block title="🖼️ Ảnh minh chứng thực hành (10 ảnh)">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ImageIcon className="h-4 w-4 text-primary" />
                Bộ ảnh minh chứng cho Bài {project.id}
              </div>
              <span className="text-xs text-muted-foreground">Bấm vào ảnh để phóng to nét</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <figure
                  key={i}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <div className="absolute inset-0 grid place-items-center text-center">
                      <div>
                        <ImageIcon className="mx-auto h-8 w-8 text-primary/60" />
                        <div className="mt-2 text-xs font-medium text-muted-foreground">
                          Ảnh #{i + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                  <figcaption className="border-t border-border bg-card px-3 py-2.5 text-xs font-medium text-foreground/80">
                    {i + 1}. Minh chứng thực hành — Bài {project.id}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              * Chèn ảnh chụp màn hình / sản phẩm thực hành vào từng ô. Kích thước khuyến nghị: 1200×900px, định dạng PNG hoặc JPG.
            </p>
          </div>
        </Block>




        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t: string) => (
            <span key={t} className="rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 px-3 py-1 text-xs font-medium">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-bold uppercase tracking-wide text-foreground/80">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function TableBlock({ data, noWrap }: { data: any; noWrap?: boolean }) {
  const content = (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <tr>
            {data.headers.map((h: string) => (
              <th key={h} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r: string[], i: number) => (
            <tr key={i} className="border-t border-border/60">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2.5 align-top">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  if (noWrap) return content;
  return <Block title={`📊 ${data.caption ?? "Bảng dữ liệu"}`}>{content}</Block>;
}

// ============ EVIDENCE GALLERY ============
function Evidence() {
  return (
    <section id="evidence" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          kicker="Minh chứng"
          title="Evidence Gallery"
          subtitle="Thư viện minh chứng trực quan\u00a0"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVIDENCE.map((e, i) => (
            <div
              key={e.title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/30">
                <div className="absolute inset-0 grid place-items-center">
                  {i === 4 ? (
                    <PlayCircle className="h-16 w-16 text-primary/70 transition group-hover:scale-110" />
                  ) : (
                    <ImageIcon className="h-14 w-14 text-primary/60 transition group-hover:scale-110" />
                  )}
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-semibold text-primary backdrop-blur">
                  #{i + 1}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold">{e.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SKILLS ============
const SKILL_STYLES = [
  { color: "#3b82f6", light: "#93c5fd", dark: "#1d4ed8", Icon: FolderTree },
  { color: "#8b5cf6", light: "#c4b5fd", dark: "#6d28d9", Icon: Search },
  { color: "#ec4899", light: "#f9a8d4", dark: "#be185d", Icon: CheckCircle2 },
  { color: "#f59e0b", light: "#fcd34d", dark: "#b45309", Icon: MessageSquareCode },
  { color: "#84cc16", light: "#bef264", dark: "#4d7c0f", Icon: Users },
  { color: "#14b8a6", light: "#5eead4", dark: "#0f766e", Icon: Sparkles },
  { color: "#0ea5e9", light: "#7dd3fc", dark: "#0369a1", Icon: ShieldCheck },
  { color: "#6366f1", light: "#a5b4fc", dark: "#4338ca", Icon: Target },
];

function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          kicker="Năng lực"
          title="Bảng tổng hợp kỹ năng đạt được"
          subtitle="Kỹ năng số cốt lõi được rèn luyện qua 6 bài tập."
        />

        <div className="reveal mt-12 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-soft)]">
          {/* Chart area */}
          <div className="relative">
            {/* Y-axis label */}
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">
              Mức độ đạt được (%)
            </div>

            <div className="flex gap-2 sm:gap-3">
              {/* Y axis */}
              <div className="relative flex w-8 shrink-0 flex-col justify-between pb-2 pt-4 text-[10px] font-semibold text-muted-foreground sm:text-xs" style={{ height: 420 }}>
                {[100, 80, 60, 40, 20, 0].map((v) => (
                  <div key={v} className="flex items-center gap-1">
                    <span>{v}</span>
                    <span className="h-px w-1.5 bg-border" />
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div className="relative flex-1">
                {/* gridlines */}
                <div className="pointer-events-none absolute inset-0 pt-4 pb-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-dashed border-border/60"
                      style={{ top: `${(i / 5) * 100}%` }}
                    />
                  ))}
                </div>

                <div className="relative grid grid-cols-4 gap-2 pt-4 sm:grid-cols-8 sm:gap-3" style={{ height: 420 }}>
                  {SKILLS.map((s, i) => {
                    const style = SKILL_STYLES[i];
                    return (
                      <div key={s.name} className="relative flex flex-col items-center justify-end">
                        {/* percentage bubble */}
                        <div
                          className="absolute z-10 rounded-lg bg-card px-2 py-0.5 text-xs font-black shadow-[var(--shadow-soft)] sm:text-sm"
                          style={{
                            color: style.dark,
                            bottom: `calc(${s.level}% + 8px)`,
                          }}
                        >
                          {s.level}%
                        </div>

                        {/* 3D bar */}
                        <div
                          className="relative w-full overflow-hidden rounded-t-md transition-transform duration-500 hover:-translate-y-1"
                          style={{
                            height: `${s.level}%`,
                            background: `linear-gradient(180deg, ${style.light} 0%, ${style.color} 40%, ${style.dark} 100%)`,
                            boxShadow: `inset -6px 0 0 0 ${style.dark}55, inset 6px 0 0 0 ${style.light}66, 0 8px 20px -6px ${style.color}80`,
                          }}
                        >
                          {/* top face highlight */}
                          <div
                            className="absolute left-0 right-0 top-0 h-2"
                            style={{
                              background: `linear-gradient(90deg, ${style.light}, ${style.color})`,
                              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5)`,
                            }}
                          />
                          {/* number */}
                          <div className="absolute inset-x-0 bottom-2 text-center text-lg font-black text-white/90 sm:text-2xl">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* base line */}
                <div className="h-1.5 rounded-full bg-gradient-to-r from-border via-muted-foreground/30 to-border" />
              </div>
            </div>

            {/* Labels row */}
            <div className="mt-5 grid grid-cols-4 gap-2 pl-10 sm:grid-cols-8 sm:gap-3">
              {SKILLS.map((s, i) => {
                const style = SKILL_STYLES[i];
                const Icon = style.Icon;
                return (
                  <div key={s.name} className="flex flex-col items-center text-center">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full border-2 bg-card shadow-sm"
                      style={{ borderColor: style.color, color: style.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div
                      className="mt-2 text-[11px] font-bold leading-tight sm:text-xs"
                      style={{ color: style.dark }}
                    >
                      {s.name}
                    </div>
                    <div className="mx-auto mt-1 h-0.5 w-6 rounded-full" style={{ background: style.color }} />
                    <p className="mt-2 text-[10px] leading-snug text-muted-foreground sm:text-xs">
                      {s.use}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer badge */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Tiếp tục phát huy — Nâng cao kỹ năng — Làm chủ tương lai số!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============ CONCLUSION ============
function Conclusion() {
  return (
    <section id="conclusion" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker="Tổng kết"
          title="Reflection & Định hướng"
          subtitle="Tự đánh giá sâu về hành trình học tập và kỹ năng đã đạt được."
        />

        <div className="reveal mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 sm:p-10 shadow-[var(--shadow-soft)]">
          <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
            <span className="text-3xl font-bold text-primary">"</span>
            Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập
            mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI
            có trách nhiệm. Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại, công nghệ không chỉ là công cụ
            hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc.
            Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm việc nhóm trực tuyến và đánh giá đạo đức AI
            sẽ tiếp tục có giá trị trong học tập, nghiên cứu và công việc tương lai.
            <span className="text-3xl font-bold text-primary">"</span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ReflectCard title="Trải nghiệm & tâm đắc" tone="primary">
            <ul className="space-y-2 text-sm">
              <li>• Nhận ra tầm quan trọng của <b>tư duy có cấu trúc</b> khi trình bày sản phẩm học tập.</li>
              <li>• Tâm đắc nhất là <b>bộ nguyên tắc sử dụng AI có trách nhiệm</b> — sản phẩm mang dấu ấn cá nhân.</li>
              <li>• Trưởng thành trong việc <b>tự đánh giá</b> và nhìn nhận điểm mạnh, điểm cần cải thiện.</li>
            </ul>
          </ReflectCard>

          <ReflectCard title="Khó khăn đã gặp" tone="secondary">
            <ul className="space-y-2 text-sm">
              <li>• Sắp xếp nội dung sao cho khoa học, tránh trùng lặp.</li>
              <li>• Đánh giá độ tin cậy của thông tin giữa nhiều nguồn.</li>
              <li>• Viết prompt đủ rõ để AI phản hồi đúng mục tiêu.</li>
              <li>• Cân bằng giữa sử dụng AI và tư duy cá nhân.</li>
            </ul>
          </ReflectCard>

          <ReflectCard title="Cách khắc phục" tone="primary">
            <ul className="space-y-2 text-sm">
              <li>• Lập kế hoạch chi tiết trước khi thực hiện từng bài tập.</li>
              <li>• Kiểm chứng thông tin từ nhiều nguồn học thuật.</li>
              <li>• Iterative — so sánh nhiều phiên bản prompt, ghi lại lý do cải tiến.</li>
              <li>• Chủ động biên tập, cá nhân hoá sản phẩm AI trước khi sử dụng.</li>
            </ul>
          </ReflectCard>

          <ReflectCard title="Định hướng tương lai" tone="secondary">
            <ul className="space-y-2 text-sm">
              <li>• Tiếp tục dùng Portfolio để lưu trữ sản phẩm học tập.</li>
              <li>• Ứng dụng kỹ năng số vào học tập, nghiên cứu và công việc.</li>
              <li>• Sử dụng AI như công cụ hỗ trợ học tập có trách nhiệm và bền vững.</li>
              <li>• Chia sẻ Portfolio để nhận phản hồi và tiếp tục cải thiện.</li>
            </ul>
          </ReflectCard>
        </div>

        <div className="reveal mt-10 rounded-3xl border border-primary/25 bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-xl font-bold">Cam kết liêm chính học thuật</h4>
              <p className="text-sm text-muted-foreground">Cam kết chung cho toàn bộ Portfolio môn Nhập môn Công nghệ số & AI.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="text-sm font-bold text-primary">Tôi cam kết:</h5>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Toàn bộ nội dung Portfolio do tôi tự thực hiện dưới sự hướng dẫn của giảng viên.",
                  "Mọi ảnh chụp minh chứng là dữ liệu thật từ quá trình học tập của bản thân.",
                  "Nguồn tham khảo được trích dẫn rõ ràng, không sao chép nguyên văn khi chưa xin phép.",
                  "Ghi rõ vai trò của AI ở những bài có sử dụng AI hỗ trợ (Bài 3, Bài 5).",
                  "Không dùng AI để làm thay bài tập hoặc gian lận học thuật dưới mọi hình thức.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold text-secondary">Vai trò của AI trong Portfolio này:</h5>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Bài 1, 2, 4, 6: KHÔNG sử dụng AI sinh nội dung — tôi tự thực hiện và tự viết.",
                  "Bài 3: AI là đối tượng nghiên cứu — dùng để so sánh prompt, không để làm bài thay.",
                  "Bài 5: AI hỗ trợ nháp kịch bản, hình minh hoạ, giọng đọc — tôi biên tập cuối cùng.",
                  "Tôi chịu trách nhiệm hoàn toàn với nội dung, dù có hay không có AI hỗ trợ.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              {"\n"}
            </p>
            <p className="text-xs text-muted-foreground">{"\n"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReflectCard({ title, tone, children }: any) {
  const bg = tone === "primary" ? "from-primary/10 to-primary/0" : "from-secondary/15 to-secondary/0";
  const iconColor = tone === "primary" ? "text-primary" : "text-secondary";
  return (
    <div className={`reveal rounded-3xl border border-border bg-gradient-to-br ${bg} p-6 shadow-sm`}>
      <h4 className={`flex items-center gap-2 text-lg font-bold ${iconColor}`}>
        <Sparkles className="h-5 w-5" />
        {title}
      </h4>
      <div className="mt-4 text-foreground/90">{children}</div>
    </div>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border bg-gradient-to-b from-transparent to-primary/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              Portfolio Kỹ thuật số
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
            </p>
          </div>
          <div className="text-sm">
            <h5 className="font-bold">Thông tin</h5>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              <li>Sinh viên: <span className="text-foreground font-medium">Phạm Thị Ngọc Mai</span></li>
              <li>Môn học: Nhập môn Công nghệ số & AI</li>
              <li>Năm học: 2025 – 2026</li>
            </ul>
          </div>
          <div className="text-sm">
            <h5 className="font-bold">Liên hệ</h5>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> 25050668@vnu.edu.vn</li>
              <li>MSV: 25050668</li>
              <li>Trường: ĐH Kinh tế - ĐHQGHN · Lớp QH-2025-E KTPT7</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 · Portfolio Kỹ thuật số cá nhân
        </div>
      </div>
    </footer>
  );
}

// ============ SECTION TITLE ============
function SectionTitle({ kicker, title, subtitle }: any) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        {kicker}
      </div>
      <h2
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
