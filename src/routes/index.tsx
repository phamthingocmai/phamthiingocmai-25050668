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
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục",
    goal: "Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập một cách hệ thống.",
    process: [
      "Tạo thư mục gốc cho môn học và chia thành các nhóm: Bài tập, Tài liệu tham khảo, Hình ảnh minh chứng, Sản phẩm cuối kỳ.",
      "Xây dựng quy tắc đặt tên: NMCNS_Bai01_QuanLyTep_2026_v1 — gồm mã môn, số bài, chủ đề, năm và phiên bản.",
      "Sao lưu định kỳ lên Google Drive/OneDrive, phân quyền truy cập theo mục đích chia sẻ.",
      "Ghi chú README trong từng thư mục để mô tả nội dung và trạng thái tài liệu.",
    ],
    tools: ["File Explorer", "Google Drive", "OneDrive"],
    evidence: "Ảnh chụp màn hình cấu trúc thư mục nhiều cấp cùng danh sách tệp đặt tên theo quy tắc.",
    analysis: [
      "Cấu trúc phân cấp giúp dữ liệu dễ tìm, giảm rủi ro thất lạc, dễ dàng chia sẻ và nộp bài.",
      "Quy tắc đặt tên cho phép phân biệt phiên bản, hỗ trợ theo dõi lịch sử chỉnh sửa và cộng tác dài hạn.",
      "Việc lưu trữ đám mây bảo đảm tính bền vững và truy cập đa thiết bị.",
    ],
    lesson: [
      "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
      "Một cấu trúc thư mục tốt tiết kiệm thời gian, tăng hiệu quả học tập và làm việc.",
    ],
    evaluation: {
      strengths: [
        "Cấu trúc thư mục 4 cấp rõ ràng, dễ tìm kiếm và mở rộng.",
        "Đặt tên tệp thống nhất theo quy tắc mã môn – bài – phiên bản.",
        "Sao lưu song song cả trên Google Drive và máy cá nhân.",
      ],
      improvements: [
        "Cần bổ sung README mô tả nội dung cho từng thư mục con.",
        "Chưa tận dụng hết các shortcut nâng cao trong File Explorer.",
      ],
      takeaways: [
        "Recycle Bin giúp khôi phục tệp đã xoá nhầm nhanh chóng.",
        "Shortcut phím tắt tiết kiệm đáng kể thời gian thao tác lặp lại.",
      ],
    },
    integrity: {
      aiUsage: [
        "Không sử dụng AI trong bài tập này.",
        "Toàn bộ thao tác được thực hiện trực tiếp trên máy tính cá nhân theo hướng dẫn của giảng viên.",
      ],
      commitments: [
        "Tôi tự tay tạo, đổi tên và sắp xếp mọi tệp/thư mục.",
        "Ảnh chụp màn hình là minh chứng thật từ máy của tôi.",
        "Cấu trúc trình bày phản ánh đúng thư mục đang sử dụng.",
      ],
    },
    tags: ["Data Management", "Digital Hygiene", "Cloud"],
    progress: 100,
  },
  {
    id: 2,
    icon: Search,
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    goal: "Sử dụng toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin trong nghiên cứu.",
    process: [
      'Chủ đề chọn: "Ứng dụng AI trong giáo dục đại học".',
      'Áp dụng 6 toán tử nâng cao: site:, filetype:, intitle:, "cụm từ chính xác", OR, dấu trừ (-), after:.',
      "Ví dụ truy vấn: site:edu.vn filetype:pdf intitle:\"trí tuệ nhân tạo\" (giáo dục OR học tập) -quảng_cáo after:2022.",
      "So sánh 5 kết quả từ nguồn khác nhau, đối chiếu với Google Scholar và website trường đại học.",
    ],
    tools: ["Google Search", "Google Scholar", "Website trường ĐH", "Báo cáo PDF chính thống"],
    evidence: "Ảnh kết quả tìm kiếm cùng bảng đánh giá 5 nguồn với các tiêu chí độ tin cậy.",
    analysis: [
      "Chiến lược tìm kiếm quan trọng hơn số lượng từ khóa: toán tử nâng cao giúp thu hẹp phạm vi và tăng chất lượng kết quả.",
      "Nguồn học thuật (báo cáo, tạp chí, website .edu) có mức tin cậy cao hơn blog cá nhân hoặc trang không rõ tác giả.",
      "Đối chiếu nhiều nguồn hạn chế thiên kiến, phát hiện thông tin sai lệch.",
    ],
    lesson: [
      "Cần kiểm chứng thông tin trước khi sử dụng trong bài viết học thuật.",
      "Không nên phụ thuộc vào một nguồn duy nhất — luôn có phương án đối chiếu.",
    ],
    evaluation: {
      strengths: [
        "Kết hợp linh hoạt 6 toán tử nâng cao trong cùng một truy vấn.",
        "Ưu tiên nguồn .edu, tổ chức quốc tế và bài báo có peer-review.",
        "Đối chiếu tối thiểu 3 nguồn trước khi đưa vào trích dẫn.",
      ],
      improvements: [
        "Cần đọc kỹ Abstract và phương pháp nghiên cứu trước khi lưu nguồn.",
        "Chưa khai thác Google Scholar Alerts để theo dõi nghiên cứu mới.",
      ],
      takeaways: [
        "Toán tử site: kết hợp filetype: lọc nhiễu hiệu quả nhất.",
        "Blog cá nhân chỉ dùng để gợi ý ý tưởng, không đưa vào trích dẫn.",
      ],
    },
    integrity: {
      aiUsage: [
        "AI chỉ được dùng để gợi ý từ khoá đồng nghĩa và dịch thuật ngữ chuyên ngành.",
        "Việc chọn nguồn và đánh giá độ tin cậy do tôi trực tiếp thực hiện.",
      ],
      commitments: [
        "Tôi tự đọc và phân tích cả 5 nguồn trong bảng đánh giá.",
        "Bảng so sánh nguồn do tôi viết, không sao chép nguyên văn từ AI.",
        "Ghi rõ vai trò hỗ trợ của AI ở phần công cụ nếu có sử dụng.",
      ],
    },
    tags: ["Search Operators", "Source Evaluation", "Critical Thinking"],
    progress: 100,
    table: {
      caption: "Bảng đánh giá nguồn (rút gọn)",
      headers: ["Nguồn", "Tác giả / Tổ chức", "Năm", "Độ tin cậy", "Lý do chọn", "Hạn chế"],
      rows: [
        ["UNESCO Report on AI in Education", "UNESCO", "2023", "Rất cao", "Tổ chức quốc tế, có phản biện", "Phạm vi toàn cầu, cần bối cảnh hoá VN"],
        ["Bài báo Journal of Educational Technology", "ĐH Melbourne", "2024", "Cao", "Có peer-review, dữ liệu định lượng", "Truy cập trả phí"],
        ["Website .edu.vn của ĐH Bách Khoa", "ĐH Bách Khoa HN", "2023", "Cao", "Nguồn học thuật trong nước", "Phạm vi khoa hẹp"],
        ["Blog cá nhân về ChatGPT", "Ẩn danh", "2024", "Thấp", "Ý tưởng gợi mở", "Không kiểm chứng, không nguồn"],
        ["Báo cáo OECD Digital Education 2023", "OECD", "2023", "Rất cao", "Dữ liệu chuẩn quốc tế", "Ngôn ngữ chuyên ngành"],
      ],
    },
  },
  {
    id: 3,
    icon: MessageSquareCode,
    title: "Bài tập 3 – Viết Prompt hiệu quả cho các tác vụ học tập",
    goal: "Viết prompt rõ ràng, có cấu trúc để AI trả lời chính xác và phù hợp mục tiêu học tập.",
    process: [
      "Viết prompt ban đầu ngắn gọn, chung chung để lấy baseline.",
      "Viết prompt cải tiến: bổ sung vai trò, bối cảnh, yêu cầu, định dạng đầu ra, tiêu chí đánh giá.",
      "Chạy cả hai prompt trên cùng công cụ (ChatGPT/Gemini) và so sánh kết quả theo 6 tiêu chí.",
      "Ghi lại phân tích và bài học cho các tác vụ học tập tiếp theo.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    evidence: "Ảnh chụp prompt gốc, prompt cải tiến, và phản hồi tương ứng của AI.",
    analysis: [
      "Prompt cải tiến giúp AI hiểu rõ vai trò, phạm vi và tiêu chí đầu ra, giảm sai lệch.",
      "Prompt Engineering giúp người học khai thác AI như công cụ hỗ trợ tư duy, không phải công cụ làm thay.",
      "AI phản hồi tốt hơn khi ngữ cảnh và ràng buộc rõ ràng — cơ chế dựa vào xác suất từ ngữ trong ngữ cảnh cụ thể.",
    ],
    lesson: [
      "Muốn AI trả lời tốt, phải đặt câu hỏi tốt.",
      "Prompt hiệu quả cần: vai trò, bối cảnh, nhiệm vụ, định dạng, tiêu chí đánh giá.",
    ],
    evaluation: {
      strengths: [
        "Prompt cải tiến đầy đủ Vai trò – Bối cảnh – Nhiệm vụ – Định dạng – Tiêu chí.",
        "So sánh khách quan theo 6 tiêu chí cụ thể, có nhận xét từng dòng.",
        "Lưu lại cả prompt và đầu ra AI làm minh chứng đối chiếu.",
      ],
      improvements: [
        "Nên thử thêm một prompt trung gian giữa hai phiên bản để thấy rõ tiến hoá.",
        "Cần kiểm chứng nội dung AI trả về bằng nguồn học thuật ngoài.",
      ],
      takeaways: [
        "Cùng chủ đề, prompt khác nhau cho ra kết quả rất khác về chất lượng.",
        "Một prompt tốt giống như một bản mô tả yêu cầu công việc rõ ràng.",
      ],
    },
    integrity: {
      aiUsage: [
        "AI đóng đúng vai trò công cụ: nhận prompt, trả kết quả.",
        "Tôi là người đặt câu hỏi, thiết kế tiêu chí, đánh giá và biên tập đầu ra.",
      ],
      commitments: [
        "Cả prompt ban đầu và prompt cải tiến đều do tôi tự viết.",
        "Bảng so sánh và nhận xét là quan sát trực tiếp của tôi.",
        "Không sao chép nguyên văn đầu ra AI vào báo cáo khi chưa biên tập.",
      ],
    },
    tags: ["Prompt Engineering", "Comparative Analysis", "AI Literacy"],
    progress: 100,
    prompts: {
      original: 'Tóm tắt bài "Ứng dụng AI trong giáo dục".',
      improved:
        'Bạn đóng vai một trợ giảng đại học. Hãy tóm tắt bài báo "Ứng dụng AI trong giáo dục đại học" trong 200 từ dành cho sinh viên năm nhất chưa có nền tảng AI. Trình bày theo 3 phần: (1) Vấn đề, (2) Giải pháp, (3) Bài học. Dùng ngôn ngữ dễ hiểu, tránh thuật ngữ nặng, cuối bài liệt kê 3 câu hỏi mở để thảo luận.',
      table: {
        headers: ["Tiêu chí", "Prompt ban đầu", "Prompt cải tiến", "Nhận xét"],
        rows: [
          ["Độ rõ ràng", "Mơ hồ", "Rất cụ thể", "Cải tiến rõ mục tiêu"],
          ["Vai trò AI", "Không có", "Trợ giảng đại học", "Định hướng phong cách"],
          ["Bối cảnh", "Thiếu", "SV năm nhất", "AI điều chỉnh độ khó"],
          ["Định dạng đầu ra", "Tự do", "3 phần rõ ràng", "Dễ đọc, dễ chấm"],
          ["Mức độ chính xác", "Trung bình", "Cao", "Ít lạc chủ đề"],
          ["Khả năng kiểm soát", "Thấp", "Cao", "Người học chủ động hơn"],
        ],
      },
    },
  },
  {
    id: 4,
    icon: Users,
    title: "Bài tập 4 – Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal: "Lập kế hoạch, phân công công việc và theo dõi tiến độ nhóm bằng công cụ trực tuyến.",
    process: [
      "Tạo bảng quản lý công việc trên Trello/Notion với các cột: Chưa làm, Đang làm, Hoàn thành, Cần chỉnh sửa.",
      "Chia nhiệm vụ theo thành viên, gắn hạn hoàn thành và mức ưu tiên.",
      "Họp nhóm định kỳ 2 lần/tuần để cập nhật trạng thái và tháo gỡ khó khăn.",
      "Ghi chú phản hồi ngay trên card để lưu vết quyết định.",
    ],
    tools: ["Trello", "Notion", "Google Sheets", "Microsoft Planner"],
    evidence: "Ảnh chụp bảng công việc nhóm cùng lịch sử cập nhật trạng thái.",
    analysis: [
      "Công cụ trực tuyến giúp nhóm làm việc minh bạch và dễ kiểm soát tiến độ.",
      "Mỗi thành viên biết rõ nhiệm vụ, hạn chế trùng lặp và bỏ sót công việc.",
      "Theo dõi trạng thái giúp phát hiện điểm nghẽn sớm để can thiệp.",
    ],
    lesson: [
      "Làm việc nhóm hiệu quả cần kế hoạch rõ ràng và công cụ phù hợp.",
      "Công cụ số nâng cao tính trách nhiệm và khả năng phối hợp.",
    ],
    evaluation: {
      strengths: [
        "Bảng Trello 4 cột phản ánh đúng luồng công việc của nhóm.",
        "Mỗi nhiệm vụ đều có người phụ trách, hạn chót và mức ưu tiên rõ ràng.",
        "Duy trì họp định kỳ 2 lần/tuần và ghi biên bản trên card.",
      ],
      improvements: [
        "Cần thêm cột 'Review' trước cột 'Hoàn thành' để tăng chất lượng.",
        "Một số card còn thiếu mô tả và tiêu chí nghiệm thu (Definition of Done).",
      ],
      takeaways: [
        "Minh bạch tiến độ giúp giảm xung đột và hiểu lầm trong nhóm.",
        "Vai trò 'điều phối' rất cần thiết để chốt hạn và đẩy tiến độ.",
      ],
    },
    integrity: {
      aiUsage: [
        "Không dùng AI để phân công công việc thay cho nhóm.",
        "AI chỉ hỗ trợ gợi ý mẫu template Trello và cách đặt tên card.",
      ],
      commitments: [
        "Việc phân công là quyết định thống nhất của cả nhóm.",
        "Ảnh chụp bảng Trello là dữ liệu thật của dự án đang thực hiện.",
        "Trạng thái công việc được cập nhật đúng với thực tế triển khai.",
      ],
    },
    tags: ["Collaboration", "Project Management", "Agile"],
    progress: 100,
    team: {
      caption: "Bảng phân công (mẫu)",
      headers: ["Thành viên", "Nhiệm vụ", "Hạn", "Trạng thái", "Ghi chú"],
      rows: [
        ["An", "Tổng hợp tài liệu tham khảo", "10/11", "Hoàn thành", "Đã đối chiếu 3 nguồn"],
        ["Bình", "Thiết kế slide", "14/11", "Đang làm", "Cần bổ sung ảnh"],
        ["Chi", "Viết kịch bản video", "16/11", "Cần chỉnh sửa", "Rút ngắn dưới 3 phút"],
        ["Dung", "Quay và dựng video", "20/11", "Chưa làm", "Chờ kịch bản"],
        ["Em", "Kiểm tra chính tả & nộp bài", "22/11", "Chưa làm", "Người điều phối"],
      ],
    },
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Bài tập 5 – Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    goal: "Sản xuất sản phẩm nội dung số phục vụ học tập với sự hỗ trợ của AI, đảm bảo có kiểm duyệt cá nhân.",
    process: [
      "Bước 1 — Lên ý tưởng: chọn khái niệm 'Prompt Engineering là gì?' làm chủ đề video 3 phút.",
      "Bước 2 — Viết kịch bản: dùng ChatGPT tạo bản nháp, sau đó cá nhân hoá ngôn ngữ, thêm ví dụ thực tế.",
      "Bước 3 — Tạo hình ảnh minh hoạ: dùng DALL·E/Gemini tạo icon và scene minh hoạ.",
      "Bước 4 — Tạo giọng đọc: dùng công cụ TTS, chọn giọng phù hợp đối tượng SV.",
      "Bước 5 — Dựng video trên CapCut/Canva, chèn phụ đề, nhạc nền không bản quyền.",
      "Bước 6 — Kiểm tra chất lượng: đối chiếu thông tin, chỉnh sửa lời thoại, xuất bản.",
    ],
    tools: ["ChatGPT", "Gemini", "DALL·E", "Canva", "CapCut"],
    evidence: "Video ngắn dưới 5 phút hoặc infographic — nhúng qua liên kết YouTube/Drive.",
    analysis: [
      "AI tăng tốc quá trình lên ý tưởng và sản xuất, nhưng chất lượng phụ thuộc vào biên tập cá nhân.",
      "Con người giữ vai trò định hướng, kiểm duyệt và chịu trách nhiệm về sản phẩm cuối cùng.",
      "Sự kết hợp AI + con người mang lại sản phẩm chỉn chu, phù hợp bối cảnh học tập.",
    ],
    lesson: [
      "AI là công cụ hỗ trợ sáng tạo, không thay thế tư duy cá nhân.",
      "Cần biết chọn lọc, biên tập và chịu trách nhiệm với nội dung tạo ra.",
    ],
    evaluation: {
      strengths: [
        "Quy trình 6 bước có bước kiểm duyệt cá nhân xen kẽ ở mỗi khâu.",
        "Kết hợp nhiều công cụ AI: viết kịch bản, tạo ảnh, giọng đọc TTS.",
        "Sản phẩm cuối có phụ đề, nhạc nền không bản quyền và ghi credit rõ.",
      ],
      improvements: [
        "Giọng TTS còn hơi máy — nên thu âm thật ở một số phân đoạn quan trọng.",
        "Một số ảnh do AI tạo cần chỉnh lại cho phù hợp bối cảnh Việt Nam.",
      ],
      takeaways: [
        "AI rút ngắn thời gian sản xuất video từ nhiều ngày xuống vài giờ.",
        "Chất lượng cuối cùng phụ thuộc chủ yếu vào khâu biên tập của con người.",
      ],
    },
    integrity: {
      aiUsage: [
        "AI hỗ trợ: viết nháp kịch bản, tạo hình minh hoạ, tạo giọng đọc.",
        "Tôi biên tập, kiểm duyệt nội dung và chịu trách nhiệm cuối cùng với sản phẩm.",
      ],
      commitments: [
        "Kịch bản cuối cùng và lời dẫn do tôi trực tiếp chỉnh sửa.",
        "Ghi rõ các công cụ AI đã sử dụng trong mô tả sản phẩm.",
        "Không sử dụng hình ảnh, âm thanh vi phạm bản quyền.",
      ],
    },
    tags: ["Generative AI", "Content Production", "Human-in-the-loop"],
    progress: 100,
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Hiểu các vấn đề đạo đức khi dùng AI và xây dựng bộ nguyên tắc cá nhân.",
    process: [
      "Tìm hiểu chính sách sử dụng AI của nhà trường và các tổ chức giáo dục quốc tế.",
      "Phân tích 6 rủi ro: đạo văn, phụ thuộc AI, sai lệch thông tin, thiên kiến thuật toán, quyền riêng tư, gian lận học thuật.",
      "Đối chiếu ý kiến từ nhiều nguồn (UNESCO, OECD, Bộ GD&ĐT).",
      "Xây dựng bộ 7 nguyên tắc cá nhân và cam kết thực hiện.",
    ],
    tools: ["Tài liệu học thuật", "Quy định nhà trường", "Nguồn tham khảo chính thống"],
    evidence: "Ảnh bộ nguyên tắc cá nhân đóng khung, tài liệu tham khảo được trích dẫn.",
    analysis: [
      "AI mang lại cơ hội lớn nhưng đặt ra rủi ro về đạo đức học thuật, quyền riêng tư và thiên kiến.",
      "Người học cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng.",
      "Sử dụng AI có trách nhiệm bảo vệ tính trung thực và chất lượng học tập lâu dài.",
    ],
    lesson: [
      "Trách nhiệm số là kỹ năng cốt lõi trong thời đại AI.",
      "Sử dụng AI đúng cách giúp phát triển bền vững hơn thay vì phụ thuộc.",
    ],
    evaluation: {
      strengths: [
        "Bộ 7 nguyên tắc bao phủ đủ các nhóm rủi ro chính của việc dùng AI.",
        "Đối chiếu với chính sách của UNESCO, OECD và Bộ GD&ĐT Việt Nam.",
        "Mỗi nguyên tắc đi kèm cam kết hành động cụ thể, không chung chung.",
      ],
      improvements: [
        "Cần cụ thể hoá cách ghi chú vai trò AI khi nộp bài (mẫu trích dẫn AI).",
        "Bổ sung các tình huống thực tế để kiểm tra tính khả thi của nguyên tắc.",
      ],
      takeaways: [
        "Trung thực học thuật là ranh giới không thể thoả hiệp với bất kỳ công cụ nào.",
        "Sử dụng AI đúng đắn giúp học sâu hơn, thay vì làm bài hời hợt.",
      ],
    },
    integrity: {
      aiUsage: [
        "Bài này thảo luận VỀ AI, không dùng AI để sinh nội dung phân tích.",
        "Mọi lập luận, ví dụ và cam kết đều do tôi tự viết dựa trên tài liệu tham khảo.",
      ],
      commitments: [
        "Tôi cam kết tuân thủ 7 nguyên tắc đã đặt ra trong suốt quá trình học.",
        "Luôn ghi rõ vai trò AI trong mọi sản phẩm học tập có sử dụng AI.",
        "Chịu trách nhiệm cuối cùng với mọi bài nộp dù có hay không có AI hỗ trợ.",
      ],
    },
    tags: ["AI Ethics", "Academic Integrity", "Digital Citizenship"],
    progress: 100,
    principles: [
      "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
      "Luôn kiểm chứng thông tin do AI cung cấp bằng nhiều nguồn.",
      "Ghi rõ khi có sử dụng AI trong quá trình học tập và nghiên cứu.",
      "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
      "Không sao chép nguyên văn nội dung AI khi chưa kiểm tra và chỉnh sửa.",
      "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy cá nhân.",
      "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
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
          <span className="truncate text-sm sm:text-base">Portfolio KTS</span>
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
          title="6 bài tập cuối kỳ"
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
          subtitle="Thư viện minh chứng trực quan — có thể thay ảnh thật khi nộp bài."
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
              <span className="font-bold">Ký xác nhận:</span> Trần / Nguyễn... — MSV 25050668 — Lớp QH-2025-E KTPT7
            </p>
            <p className="text-xs text-muted-foreground">Hà Nội, năm học 2025 – 2026</p>
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
          © 2026 · Portfolio Kỹ thuật số cá nhân — Made with 💗 & 💙
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
