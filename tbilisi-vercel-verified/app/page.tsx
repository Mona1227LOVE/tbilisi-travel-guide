"use client";

import { useState } from "react";

type Stop = {
  time: string;
  name: string;
  localName: string;
  tag: string;
  history: string;
  duration: string;
  transport: string;
  reason: string;
  access?: string;
};

type Day = {
  number: number;
  title: string;
  subtitle: string;
  range: string;
  stats: string[];
  stops: Stop[];
};

const itinerary: Day[] = [
  {
    number: 1,
    title: "巨构、纪念碑与山坡住宅",
    subtitle: "从第比利斯海出发，横穿城市北部与西部，把最分散、最难抵达的苏联现代主义地标一次扫完。",
    range: "06:50—20:15",
    stats: ["约 42 KM", "7 处建筑", "打车为主"],
    stops: [
      {
        time: "06:50",
        name: "酒店出发",
        localName: "Hotels & Preference Hualing Tbilisi",
        tag: "BASE",
        history: "酒店位于第比利斯海新城，距离轨道交通较远。特种兵行程不建议先绕去地铁站，清晨直接叫车前往第一站。",
        duration: "集合 10 分钟",
        transport: "酒店前台叫车 / Bolt，约 20–30 分钟",
        reason: "避开早高峰，也能赶在旅行团前抵达纪念碑。",
      },
      {
        time: "07:20",
        name: "格鲁吉亚编年史纪念碑",
        localName: "საქართველოს მატიანე · Chronicle of Georgia",
        tag: "SOVIET MONUMENT",
        history: "格鲁吉亚编年史纪念碑由出生于第比利斯的雕塑家祖拉布·采列捷利设计，工程于 1985 年、即苏联晚期开始推进，此后多年仍不断补充细节。纪念碑由十六根约三十米高的青铜包覆巨柱组成，上层刻画格鲁吉亚历代君王、英雄与重要人物，下层则表现《圣经》故事和格鲁吉亚基督教传统。它没有采用苏联常见的革命领袖或工农题材，而是用极端宏大的纪念语言重新讲述本民族历史，反映了加盟共和国在苏联末期逐渐强化文化身份的趋势。巨柱、台阶、轴线与第比利斯海共同形成近乎舞台化的空间，人在其中显得非常渺小。纪念碑至今仍带有“未完成作品”的气质，也因此成为理解苏联纪念艺术、格鲁吉亚民族叙事与独立后身份转换的重要现场。",
        duration: "45 分钟",
        transport: "从酒店打车；结束后继续包车式移动",
        reason: "清晨人少、光线干净，巨柱与第比利斯海的尺度感最强。",
        access: "室外参观",
      },
      {
        time: "08:35",
        name: "第比利斯考古博物馆",
        localName: "Tbilisi Archaeological Museum",
        tag: "LATE MODERNISM",
        history: "第比利斯考古博物馆由格鲁吉亚建筑师绍塔·博斯塔纳什维利设计，于 1988 年落成，是苏联解体前夕极具实验性的文化建筑。设计没有把博物馆处理成传统的对称公共建筑，而是将其塑造成一块从土地中隆起的巨大几何体：倾斜墙面、狭窄开口和近乎封闭的混凝土外壳，让建筑同时联想到墓冢、考古断层与被切开的岩石。参观流线原本围绕地下遗存与展览空间组织，建筑本身也像一件关于“挖掘”和“记忆”的雕塑。它体现了格鲁吉亚晚期苏联现代主义摆脱标准化设计、转向象征性和地域表达的尝试。苏联解体后，博物馆长期失去正常公共功能，建筑逐渐荒废，但其强烈的造型仍受到建筑研究者关注。今天应仅从公共区域观察，不应进入破损或封闭部分。",
        duration: "25 分钟",
        transport: "从纪念碑打车约 25–35 分钟",
        reason: "建筑本身比展览更重要；从外围看几何体量与山坡的关系。",
        access: "仅看外观 · 不进入废弃区域",
      },
      {
        time: "09:20",
        name: "前公路建设部大楼",
        localName: "Bank of Georgia Headquarters",
        tag: "BRUTALISM · 1975",
        history: "这座建筑由乔治·查哈瓦和祖拉布·贾拉加尼亚为格鲁吉亚苏维埃社会主义共和国公路建设部设计，1969 年开始设计，1970 至 1975 年间建成。查哈瓦既是建筑师，也是当时公路建设系统的官员，因此大楼的构成直接借用了“道路交叉”的概念：多个横向办公体块像桥梁一样彼此穿插，再由垂直交通核心支撑，形成悬挑于山坡和河谷上方的立体网络。设计受到俄罗斯构成主义“水平摩天楼”思想影响，同时提出让地面、植被和空气从建筑下方自由穿过的“空间城市”理念。苏联解体后，大楼一度空置，后来经修复成为格鲁吉亚银行总部。虽然内部属于办公区域，但外部仍完整展示了晚期苏联现代主义对结构、基础设施和自然地形的激进想象。",
        duration: "35 分钟",
        transport: "打车约 15 分钟；在临河公共区域观察",
        reason: "第比利斯最国际知名的苏联现代主义建筑，也是本路线的核心必看。",
        access: "银行办公楼 · 仅看外观",
      },
      {
        time: "10:15",
        name: "Expo Georgia 展览园",
        localName: "ყოფილი სახალხო მეურნეობის მიღწევათა გამოფენა",
        tag: "SOVIET EXPO",
        history: "Expo Georgia 的前身是格鲁吉亚苏维埃社会主义共和国国民经济成就展览园，功能类似莫斯科著名的全苏国民经济成就展。园区通过农业、工业、科技和消费品展馆，向公众展示社会主义建设成果，也承担节庆、会议和群众休闲活动。不同年代形成的建筑并不完全统一：早期展馆带有古典柱廊和纪念性轴线，后期建筑则逐渐使用玻璃幕墙、薄屋顶和更自由的现代主义结构；喷泉、园林和公共艺术把各个馆舍串成一个完整的宣传与游憩空间。苏联解体后，园区转型为商业展览和会议中心，部分旧馆经过改造，部分装饰被覆盖或消失。如今在这里看到的并非一座冻结的博物馆，而是计划经济展示体系被重新利用的城市片段，适合比较不同年代的建筑语言和功能变化。",
        duration: "55 分钟",
        transport: "从银行总部打车约 10 分钟",
        reason: "一次看到多种年代的展馆语言，也适合短暂补水与吃简餐。",
        access: "园区开放情况以现场为准",
      },
      {
        time: "11:35",
        name: "努特苏比泽天空桥住宅群",
        localName: "Nutsubidze Plato · Skybridge",
        tag: "SOCIAL HOUSING",
        history: "努特苏比泽高原住宅区主要形成于 20 世纪 70 至 80 年代，是第比利斯向西部山坡扩张时建设的大型苏联住宅组团。这里最著名的“天空桥”将多栋高层住宅在较高楼层直接连接，并把桥端接到陡峭山坡上的道路，使居民无需先下到谷底，再重新爬升到另一侧。建筑师在预制混凝土住宅的标准化框架内，引入连廊、架空空间和因地制宜的高差处理，回应了第比利斯复杂地形，也体现苏联晚期对“立体社区”和集体生活方式的探索。苏联解体后，公共维护体系削弱，连廊、电梯和公共空间经历老化，居民又通过封阳台、加建等方式不断改造原有立面。这里首先是现实中的住宅社区，而非主题景点；参观时应只使用公共通道，避免对住宅内部和居民近距离拍摄。",
        duration: "60 分钟",
        transport: "打车约 20–30 分钟，定位 Nutsubidze Skybridge",
        reason: "从巨型公共建筑转向真实居住空间，能看到苏联规划如何塑造日常生活。",
        access: "居民区 · 保持安静，不拍居民",
      },
      {
        time: "13:00",
        name: "格鲁吉亚技术大学与体育宫",
        localName: "Technical University · Tbilisi Sports Palace",
        tag: "1960s CIVIC",
        history: "第比利斯体育宫由建筑师拉多·阿列克西-梅斯希什维利和尤里·卡斯拉泽设计，1961 年正式启用，是格鲁吉亚战后最重要的大跨度公共建筑之一。它诞生于苏联建筑政策发生转折的时期：斯大林去世后，官方开始批判昂贵的装饰和“建筑浪费”，转而强调工业化、标准化与结构效率。体育宫以巨大的圆形屋盖覆盖比赛和集会空间，外部立面不再依赖古典柱式，而是直接表现结构节奏与公共入口。其工程尺度展示了当时对群众体育、文艺演出和大型公共活动的重视。周边的格鲁吉亚技术大学、广场、道路和后续建设的设施，共同构成典型的苏联教育—体育城市组团。今天体育宫仍在使用，局部外观虽经过商业化改造，但主体体量仍能清晰呈现从斯大林式纪念建筑迈向现代主义工程理性的历史转型。",
        duration: "60 分钟",
        transport: "打车至体育宫；外观参观后附近快速午餐",
        reason: "集中观察大跨度结构、广场尺度与教育建筑，步行成本低。",
        access: "外观参观",
      },
      {
        time: "15:00",
        name: "象棋宫与高山俱乐部",
        localName: "Chess Palace and Alpine Club",
        tag: "MODERNISM · 1973",
        history: "象棋宫与高山俱乐部由弗拉基米尔·阿列克西-梅斯希什维利和格尔马内·古杜沙乌里设计，方案完成于 1965 年，建筑于 1973 年开放。项目献给当时已五次获得女子世界冠军的格鲁吉亚棋手诺娜·加普林达什维利，同时容纳象棋比赛、训练和登山俱乐部活动。建筑没有以巨大体量压住维拉公园，而是顺着坡地分层展开，把露台、台阶和树木纳入整体流线。中央比赛厅可容纳约五百人，周围设置画廊和可移动隔墙；木质镶嵌、天然石材与皇冠形砌块等细节，使它既具有现代主义的清晰结构，又保留格鲁吉亚手工艺的质感。苏联时期，象棋是重要的群众文化与国家荣誉项目，这座建筑正体现了体育、教育和文化宫功能的结合。2019 年，它被列为文化遗产，但部分空间仍面临损坏和使用压力。",
        duration: "45 分钟",
        transport: "从体育宫步行约 20 分钟 / 打车 5–10 分钟",
        reason: "粗犷体量中藏着非常细腻的本地材料，是格鲁吉亚式现代主义的代表。",
        access: "优先看公园侧外观，室内视现场开放",
      },
      {
        time: "16:10",
        name: "拉古纳·维尔泳池遗址",
        localName: "Laguna Vere",
        tag: "BRUTALISM · 1978",
        history: "拉古纳·维尔水上运动中心由绍塔·卡夫拉什维利、拉马兹·基克纳泽和古拉姆·阿布拉泽设计，于 1978 年建成。它位于维尔河谷，以大型室外泳池、跳水塔、阶梯看台和公共活动空间构成完整的体育综合体。建筑师将裸露混凝土、清晰的结构构件和富有动势的跳台组合在一起，同时利用马赛克与色彩缓和巨型设施的粗犷感。苏联时期，这里既服务专业训练和比赛，也是市民夏季游泳、社交和观看活动的重要场所，体现了公共体育设施作为集体生活中心的理想。苏联解体后，运营和维护体系中断，场地逐渐停用并受到房地产开发压力，部分艺术装饰和建筑构件损坏或消失。如今遗址仍能看出强烈的空间轮廓，但它不是开放景区，只适合从公共道路观察其看台、跳台与城市地形之间的关系。",
        duration: "25 分钟",
        transport: "从象棋宫步行约 15 分钟",
        reason: "快速补齐苏联体育建筑谱系，与上午的体育宫形成对照。",
        access: "仅从公共道路观察，禁止翻越",
      },
      {
        time: "17:00",
        name: "共和国广场苏联建筑组",
        localName: "Republic Square · Former Hotel Iveria",
        tag: "URBAN ENSEMBLE",
        history: "共和国广场在苏联时期是第比利斯现代化城市中轴的重要节点，周边集中建设了伊维利亚酒店、中央电报局等大型公共建筑。前伊维利亚酒店建于 20 世纪 60 年代，高耸、重复的客房单元象征国际旅游与社会主义现代城市形象；苏联解体后的内战与流离失所时期，酒店又长期成为难民安置场所，后来经彻底改造成为现代酒店。邻近的中央电报局以严密的火山岩网格立面承载通信枢纽功能，是 1970 年代技术基础设施纪念化的典型做法。独立后，广场名称、交通组织和建筑用途多次变化，一些立面被更新，一些结构被商业空间重新解释。因此这里的价值不只在于保存了多少“原貌”，更在于它把苏联现代主义、冲突后的社会记忆以及资本进入后的城市改造压缩在同一片街区。",
        duration: "60 分钟",
        transport: "步行或短途打车；沿鲁斯塔维利大道移动",
        reason: "无需进馆，傍晚还能看建筑立面从旧体制功能转向酒店与商业。",
        access: "公共广场",
      },
      {
        time: "18:20",
        name: "鲁斯塔维利地铁体验",
        localName: "Rustaveli Metro Station",
        tag: "METRO · 1966",
        history: "第比利斯地铁首段于 1966 年 1 月投入运营，使第比利斯成为苏联较早拥有地铁系统的城市之一。鲁斯塔维利站位于主干道与山坡交接处，由于站台埋藏较深，乘客必须通过极长的扶梯进入地下，这段下降过程本身就构成强烈的空间体验。早期苏联地铁常被称为“人民的宫殿”，但第比利斯车站不像莫斯科那样大量使用豪华装饰，而更多依靠石材、比例、灯光和结构秩序塑造庄重感，反映赫鲁晓夫时期对经济性和工程效率的强调。地铁不仅解决交通问题，也把新住宅区、工业区与城市中心纳入统一网络，成为现代城市身份的一部分。后来的翻修改变了部分灯具、标识和材料，但深埋站体、扶梯尺度以及日常高强度使用，仍让人直接感受到苏联基础设施建设的技术雄心。",
        duration: "35 分钟",
        transport: "进站乘一段地铁，再叫车返回酒店",
        reason: "用身体感受地下城市，而不是只在地面拍建筑。",
        access: "保管好随身物品",
      },
      {
        time: "20:15",
        name: "返回酒店",
        localName: "Tbilisi Sea New City",
        tag: "END",
        history: "晚高峰时段从中心返回酒店可能耗时较长。建议途中解决晚餐或打包，不再追加远距离景点。",
        duration: "约 35–55 分钟",
        transport: "Bolt / 酒店认可的出租车",
        reason: "为第二天 07:00 前出发保留恢复时间。",
      },
    ],
  },
  {
    number: 2,
    title: "仪式宫、地铁与苏维埃中轴",
    subtitle: "先扫东南部两座雕塑性建筑，再用地铁切入市中心，沿着体育设施、政府建筑与历史展览一路步行。",
    range: "07:00—20:30",
    stats: ["约 28 KM", "8 处建筑", "地铁 + 步行"],
    stops: [
      {
        time: "07:00",
        name: "酒店出发",
        localName: "Hotels & Preference Hualing Tbilisi",
        tag: "BASE",
        history: "第二天同样不绕行 Varketili 地铁站，直接打车切入城市东南侧，节省至少一次换乘。",
        duration: "集合 10 分钟",
        transport: "酒店前台叫车 / Bolt",
        reason: "仪式宫只能从外围观察，清晨道路与拍摄环境更从容。",
      },
      {
        time: "07:30",
        name: "第比利斯仪式宫",
        localName: "Palace of Rituals · Wedding Palace",
        tag: "ORGANIC MODERNISM · 1984",
        history: "第比利斯仪式宫由建筑师维克多·乔尔贝纳泽与瓦扎·奥尔贝拉泽设计，1984 年建成，原本用于举办由国家主持的婚礼、命名礼等世俗仪式。苏联政府希望以现代公共建筑和新的集体礼仪，取代或弱化传统宗教仪式，因此各加盟共和国都曾兴建“婚礼宫”；但第比利斯这座远远超出普通登记处的功能表达。建筑将教堂中轴、塔楼、人体曲线、动物形态与未来主义结构混合在一起，内部空间曾通过连续楼梯、光线和仪式路线制造近似宗教建筑的精神体验，同时又避免直接复制教堂形式。它体现了格鲁吉亚晚期现代主义擅长使用象征、隐喻和本土空间记忆的特点。苏联解体后，建筑被私人收购并改变用途，不再作为普通公共设施开放。今天只能从公共道路远观，不能擅自进入院落。",
        duration: "35 分钟",
        transport: "从酒店打车约 20–30 分钟",
        reason: "造型极其罕见，与第一天的理性网格和悬挑巨构完全不同。",
        access: "私人建筑 · 仅从公共道路远观",
      },
      {
        time: "08:15",
        name: "奥尔塔查拉中央汽车站",
        localName: "Ortachala Central Bus Station",
        tag: "TRANSPORT · 1973",
        history: "奥尔塔查拉中央汽车站由绍塔·卡夫拉什维利、拉马兹·基克纳泽和弗拉基米尔·库尔季什维利等人设计，建设持续于 1964 至 1973 年。作为连接第比利斯与格鲁吉亚各地区、以及跨共和国长途线路的重要门户，车站不仅承担售票、候车和车辆调度，还被赋予展示首都现代化形象的任务。原设计通过弧形体量、宽阔雨棚、分层交通和大型公共艺术组织人流与车流，让普通长途出行具有鲜明的公共仪式感。它代表苏联 1960—70 年代把交通设施视为城市纪念建筑的倾向。独立后，私营运输、商业招牌和多次局部改建不断改变原有空间，部分构件和装饰已难以辨认，但车站仍维持交通功能。参观时应特别留意旧有结构如何被新的店铺、站台与流线包裹。",
        duration: "30 分钟",
        transport: "从仪式宫打车约 10 分钟",
        reason: "仍在使用的交通建筑，比废墟更能呈现苏联基础设施的日常延续。",
        access: "运营场所 · 注意车流",
      },
      {
        time: "09:00",
        name: "300 阿拉格维利地铁站",
        localName: "300 Aragveli Metro",
        tag: "METRO · 1967",
        history: "300 阿拉格维利站是第比利斯地铁第一条线路的组成部分，由建筑师塔马兹·特夫扎泽设计，1967 年启用。站名纪念 1795 年克尔察尼西战役中为保卫第比利斯而战死的三百名阿拉格维勇士。苏联公共建筑经常通过历史人物和英雄叙事建立集体认同，这座车站则把格鲁吉亚本民族的战争记忆嵌入统一的社会主义交通系统。地下大厅采用清晰的结构节奏、石材饰面与纪念性艺术，让通勤空间兼具纪念馆般的庄重感；装饰并非单纯复制传统图案，而是将英雄主题压缩为现代建筑中的符号和材质。后续维修可能改变灯光、设备和局部饰面，但站名、空间比例与纪念主题仍然保留。这里最值得观察的是日常通勤和历史纪念如何在同一个地下空间里持续共存。",
        duration: "25 分钟",
        transport: "步行 / 短途打车进站，乘红线北上",
        reason: "既是交通节点也是建筑目的地，顺路完成一次高效移动。",
        access: "正常运营",
      },
      {
        time: "09:45",
        name: "迪纳摩体育场",
        localName: "Boris Paichadze Dinamo Arena",
        tag: "MEGASTRUCTURE · 1976",
        history: "现今迪纳摩体育场的主体于 1976 年启用，是在更早体育设施基础上兴建的大型综合体育建筑，当时可容纳数万名观众。苏联体系把足球和大型体育赛事同时视为群众娱乐、城市荣誉和集体组织的重要工具，因此体育场不仅需要满足比赛功能，也要承担节庆、仪式和大规模集会。建筑通过连续环形看台、重复的外部支撑构件与明确的人流疏散系统形成巨大的城市体量，结构本身即成为立面。这里长期是第比利斯迪纳摩队的重要主场；球队在 1981 年赢得欧洲优胜者杯，使体育场在格鲁吉亚公共记忆中具有超越建筑本身的地位。独立后，场馆经过翻修并以格鲁吉亚足球名宿鲍里斯·派恰泽命名，座椅、安全设施和商业系统发生变化，但苏联时期形成的主体尺度与群众体育象征仍然清晰可见。",
        duration: "35 分钟",
        transport: "地铁至 Station Square 后步行 / 换乘一站",
        reason: "快速看一座仍持续使用的苏联超级结构。",
        access: "无比赛时以外观为主",
      },
      {
        time: "10:40",
        name: "法布里卡旧缝纫工厂",
        localName: "Fabrika Tbilisi",
        tag: "INDUSTRIAL REUSE",
        history: "法布里卡所在建筑原为苏联时期的大型缝纫工厂，是第比利斯左岸工业与工人生活网络的一部分。此类工厂通常采用规则柱网、宽大楼层、连续窗带和实用主义立面，以便容纳成排设备、稳定采光和集中生产；建筑价值并不来自纪念性装饰，而来自标准化工业空间所承载的集体劳动体系。苏联解体后，许多城市工厂因生产链断裂而停产，建筑一度闲置。改造项目保留了主要混凝土骨架、粗糙墙面和工业尺度，将内部转化为旅舍、工作室、餐饮与公共院落，并利用涂鸦和临时活动建立新的城市文化身份。它并非原封不动的工业遗址，而是后苏联城市把生产空间转化为消费与创意空间的典型案例，也能引发对城市更新、商业化与记忆保留之间关系的思考。",
        duration: "50 分钟",
        transport: "打车约 10 分钟 / 步行约 25 分钟",
        reason: "安排咖啡与快速补给，同时观察工业遗产的当代转型。",
        access: "公共院落",
      },
      {
        time: "11:50",
        name: "马尔贾尼什维利地铁站",
        localName: "Marjanishvili Metro",
        tag: "METRO · 1960s",
        history: "马尔贾尼什维利地铁站属于第比利斯最早建设的一批地铁空间，设计团队包括吉维·梅尔卡泽、特莫·米卡沙维泽、内利·克瓦茨哈瓦和伊洛·卡夫拉什维利等建筑师。车站形成于 1960 年代苏联建筑政策转向之际：官方已经停止斯大林时期昂贵、繁复的装饰竞赛，强调经济、标准化和“诚实”的材料表达。设计因此没有复制莫斯科式的水晶吊灯与密集雕塑，而是用石材饰面、柱列比例、简洁灯光和经过控制的装饰细节建立秩序。站名纪念格鲁吉亚戏剧导演科特·马尔贾尼什维利，也让城市文化人物进入日常交通体系。车站经过长期使用和维修后，部分设备与表面发生变化，但它仍是观察早期第比利斯地铁如何在统一技术标准中保留地方审美的重要案例。",
        duration: "20 分钟",
        transport: "从法布里卡步行约 12 分钟后进站",
        reason: "不额外绕路，把下一段交通本身变成景点。",
        access: "正常运营",
      },
      {
        time: "12:35",
        name: "第比利斯马戏团与英雄广场",
        localName: "Tbilisi Circus · Heroes Square",
        tag: "STALINIST · 1939",
        history: "第比利斯马戏团建于 1930 年代末，1939 年投入使用，是格鲁吉亚斯大林时期大型文化娱乐建筑的代表。马戏在苏联是一种高度普及的群众艺术，固定场馆既服务表演，也承担国家文化传播与城市公共生活功能。建筑采用近乎完整的圆形平面，将观众席围绕中央表演场组织；外部以高大的基座、连续拱券和厚重石材塑造纪念性形象。它被放置在山丘上，使建筑从多个方向都像独立地标般出现，体现斯大林时期强调轴线、对称与城市控制力的构图方式。此后，周边道路不断扩建，英雄广场、纪念设施和多层立交逐渐包围原有建筑，使早期完整的城市景观被交通基础设施切割。如今从外围观察，既能读到苏联古典主义的公共文化理想，也能看到后来的汽车城市如何改变历史建筑与街道的关系。",
        duration: "35 分钟",
        transport: "地铁至 Rustaveli 后步行 / 短途打车",
        reason: "从晚期现代主义向更早的苏联古典主义倒推，补全风格演变。",
        access: "外观参观 · 过街注意安全",
      },
      {
        time: "13:20",
        name: "快速午餐与转场",
        localName: "Rustaveli Avenue",
        tag: "REFUEL",
        history: "控制在 35 分钟内，选择柜台式餐馆，不安排正餐排队。补足饮水后开始下午连续步行段。",
        duration: "35 分钟",
        transport: "向共和国广场方向步行",
        reason: "下午含唯一需要排队购票的展览，必须守住时间。",
      },
      {
        time: "14:00",
        name: "前电报局大楼",
        localName: "Former Central Telegraph",
        tag: "BRUTALISM · 1970s",
        history: "前中央电报局建于苏联后期，是共和国广场及鲁斯塔维利大道现代公共建筑群的重要组成部分。电报、电话和邮政网络曾是国家行政、新闻传播与跨地区联系的关键基础设施，因此设计没有把它处理成普通办公楼，而是以巨大体量占据广场边缘。立面使用深色火山岩和高度重复的网格，将大量相似的办公与技术空间统一成严密、近乎机器般的外观；窗洞的节奏既回应内部模块，也强化了通信系统稳定、精确的公共形象。苏联解体与数字通信兴起后，原有功能逐渐消失，建筑经历闲置、产权变化和商业更新。改造保留了最具识别度的网格立面，同时把内部转向新的酒店和服务功能。它因此成为观察技术纪念碑如何在后苏联资本和旅游经济中获得第二次生命的典型案例。",
        duration: "20 分钟",
        transport: "步行抵达",
        reason: "用最短时间观察巨型通信基础设施如何转变为当代城市空间。",
        access: "外观参观",
      },
      {
        time: "14:40",
        name: "格鲁吉亚议会大厦",
        localName: "Former Government Palace of the Georgian SSR",
        tag: "SOCIALIST REALISM · 1953",
        history: "今天的格鲁吉亚议会大厦最初是格鲁吉亚苏维埃社会主义共和国政府宫，设计和施工跨越两个阶段：上部建筑在 1933 至 1938 年间完成，面向大道的主要部分则在战后继续建设，于 1953 年形成现有主体。参与设计的建筑师包括维克托·科科林、乔治·列扎瓦和弗拉基米尔·纳萨里泽。项目承担部长会议、最高苏维埃及行政机构等功能，是苏联政权重新组织第比利斯城市中心的重要工程。建筑通过严格轴线、巨大尺度、石材立面、拱廊与经过抽象的格鲁吉亚装饰，实践“社会主义内容、民族形式”的官方要求：既要表现中央权力，又要呈现加盟共和国的地方特征。独立后，它转为格鲁吉亚国家议会所在地，并成为政治集会与抗议的重要现场。建筑功能的改变，使同一套纪念性空间先后服务于两个不同政治体系。",
        duration: "35 分钟",
        transport: "沿鲁斯塔维利大道步行约 15 分钟",
        reason: "从建筑尺度理解权力如何塑造城市主街，也与附近晚期现代主义形成对照。",
        access: "政府建筑 · 勿拍安保设施",
      },
      {
        time: "15:20",
        name: "苏联占领展览厅",
        localName: "Soviet Occupation Exhibition Hall",
        tag: "HISTORY · 1921–1991",
        history: "苏联占领展览厅位于格鲁吉亚国家博物馆体系中的西蒙·贾纳希亚格鲁吉亚博物馆内。展览聚焦 1921 年红军进入格鲁吉亚、格鲁吉亚民主共和国终结，直至 1991 年恢复独立之间的历史。通过政府文件、个人档案、照片、报刊、监狱与镇压相关实物，以及独立运动资料，展览呈现政治清洗、强制集体化、文化控制、反抗和流亡等经验。它的叙事立场形成于独立后的国家记忆建设，与苏联时期博物馆对革命和现代化的官方讲述明显不同。把这里安排在两天建筑路线后半段，是因为纪念碑、地铁、住宅和政府大楼不能只被当成“复古风格”：它们同时属于具体制度、劳动体系与政治历史。参观者可以借此重新思考前面看到的宏大工程，在技术成就、公共生活与权力控制之间存在的复杂关系。",
        duration: "80 分钟",
        transport: "从议会步行约 5 分钟",
        reason: "看了一天苏联建筑后，用历史材料补足这些建筑背后的制度语境。",
        access: "周二至周日 10:00–18:00；最晚 17:30 入场",
      },
      {
        time: "17:00",
        name: "自由广场苏联现代主义建筑",
        localName: "Former Tsekavshiri · Univermag Tbilisi",
        tag: "1970s MODERNISM",
        history: "自由广场在苏联时期经历多轮重塑，周边的前合作社办公楼、Tsekavshiri 大楼与第比利斯百货综合体，是 1960—70 年代现代主义进入历史中心的代表。建筑师面对的并非空白新区，而是由帝俄时期立面、斯大林式建筑和复杂街巷组成的既有环境，因此采用玻璃、连续水平线、架空连接和巨型综合体等手法，把办公、商业与交通功能嵌入广场边缘。前 Tsekavshiri 大楼以鲜明的结构和玻璃表面回应行政办公的新形象；百货综合体则试图把多个功能组织为一座连续的城市机器。这些项目曾被视为现代化成果，也因体量和材料与旧城冲突而长期引发争议。独立后，广告、商业改造和产权变化再次改变立面。今天在广场步行，可以一次读到帝国、斯大林时期、晚期苏联和当代资本留下的多重城市层次。",
        duration: "45 分钟",
        transport: "从博物馆沿大道步行",
        reason: "建筑密度高、移动距离短，适合作为下午最后一组专业向打卡。",
        access: "外观参观",
      },
      {
        time: "18:00",
        name: "300 阿拉格维利—酒店",
        localName: "Final metro ride",
        tag: "RETURN",
        history: "从 Liberty Square 乘红线到 300 Aragveli 或 Varketili，再叫车回酒店。若体力尚可，可在旧城快速吃饭后再返回。",
        duration: "约 60–90 分钟",
        transport: "地铁 + Bolt；晚高峰预留缓冲",
        reason: "用轨道交通穿过拥堵中心，把预算留给最后一段无地铁覆盖的酒店接驳。",
      },
      {
        time: "20:30",
        name: "抵达酒店",
        localName: "Tbilisi Sea New City",
        tag: "END",
        history: "两天路线结束。若第二天恰逢周一，苏联占领展关闭，可把空出的 80 分钟留给自由广场建筑群与旧城步行。",
        duration: "行程结束",
        transport: "—",
        reason: "完成两天约十五处苏联时期建筑与城市空间。",
      },
    ],
  },
];

function PlaceCard({ stop, number }: { stop: Stop; number: number }) {
  return (
    <article className="place-card">
      <div className="card-number">{String(number).padStart(2, "0")}</div>
      <div className="card-content">
        <div className="card-topline">
          <span className="card-type">{stop.tag}</span>
          <span className="stop-time">{stop.time}</span>
        </div>
        <h4>{stop.name}</h4>
        <p className="local-name">{stop.localName}</p>
        <section className="history-block">
          <span>建筑历史</span>
          <p>{stop.history}</p>
        </section>
        <dl className="card-meta">
          <div>
            <dt>建议停留</dt>
            <dd>{stop.duration}</dd>
          </div>
          <div>
            <dt>移动方式</dt>
            <dd>{stop.transport}</dd>
          </div>
        </dl>
        <div className="reason">
          <span>为什么这样排</span>
          <p>{stop.reason}</p>
        </div>
        {stop.access && <p className="access-note">注意 · {stop.access}</p>}
      </div>
    </article>
  );
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1);
  const activeDay = itinerary[selectedDay - 1];

  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top">
          <span className="brand-mark">TG</span>
          <span>Tbilisi · Soviet Field Notes</span>
        </a>
        <div className="nav-links">
          <a href="#planner">两日路线</a>
          <a href="#base">酒店基点</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-index">FIELD FILE № 02 · TBILISI</div>
        <div className="hero-main">
          <p className="kicker">48 HOURS · SOVIET ARCHITECTURE</p>
          <h1>
            Tbilisi
            <span>两日特种兵建筑路线</span>
          </h1>
          <p className="hero-description">
            以第比利斯海新城酒店为基地，两天横穿城市，集中观看苏联现代主义、野兽派、社会主义现实主义与后工业空间。
          </p>
        </div>
        <div className="hero-aside">
          <span>2 DAYS</span>
          <span>15+ SITES</span>
          <span>EARLY START</span>
        </div>
        <a className="hero-link" href="#planner">打开路线 <span>↓</span></a>
      </header>

      <section className="base-section" id="base">
        <div className="base-label">TRAVEL BASE</div>
        <div>
          <p className="kicker">酒店基点</p>
          <h2>Hotels & Preference<br />Hualing Tbilisi</h2>
        </div>
        <dl className="base-details">
          <div><dt>区域</dt><dd>Tbilisi Sea New City</dd></div>
          <div><dt>前台电话</dt><dd>+995 032 250 5025</dd></div>
          <div><dt>路线策略</dt><dd>早晨直接打车离店；返程采用地铁 + 打车</dd></div>
        </dl>
      </section>

      <section className="planner" id="planner">
        <div className="section-intro">
          <span className="section-index">01</span>
          <div>
            <p className="kicker">CHOOSE A DAY</p>
            <h2>两日攻击路线</h2>
          </div>
        </div>
        <div className="duration-options two-days" role="group" aria-label="选择行程日期">
          {itinerary.map((day) => (
            <button
              type="button"
              key={day.number}
              className={selectedDay === day.number ? "duration active" : "duration"}
              onClick={() => setSelectedDay(day.number)}
              aria-pressed={selectedDay === day.number}
            >
              <span className="duration-number">{day.number}</span>
              <span className="duration-unit">第 {day.number} 天</span>
              <strong>{day.title}</strong>
              <small>{day.range}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="itinerary" id="itinerary">
        <div className="section-heading">
          <div>
            <p className="kicker">DAY {String(activeDay.number).padStart(2, "0")} · ITINERARY</p>
            <h2>{activeDay.title}</h2>
          </div>
          <div className="day-stats">
            {activeDay.stats.map((stat) => <span key={stat}>{stat}</span>)}
          </div>
        </div>

        <article className="day-block">
          <aside className="day-title">
            <span>{activeDay.range}</span>
            <h3>第 {activeDay.number} 天</h3>
            <p>{activeDay.subtitle}</p>
            <div className="day-rule">
              <b>执行规则</b>
              <p>郊区点位每站不恋战；午餐控制在 35 分钟；外观参观不闯入、不翻越、不打扰居民。</p>
            </div>
          </aside>
          <div className="place-grid">
            {activeDay.stops.map((stop, index) => (
              <PlaceCard key={`${activeDay.number}-${stop.time}-${stop.name}`} stop={stop} number={index + 1} />
            ))}
          </div>
        </article>
      </section>

      <section className="field-notes">
        <p className="kicker">BEFORE YOU GO</p>
        <h2>出发前提醒</h2>
        <div className="notes-grid">
          <p><b>交通</b>酒店距离地铁较远。首段与郊区建筑之间优先 Bolt；中心城区用地铁和步行。</p>
          <p><b>日期</b>苏联占领展周一及官方节假日关闭。第二天如遇周一，保留外观路线并增加旧城步行。</p>
          <p><b>安全</b>考古博物馆、拉古纳泳池等只从公共区域观察；仪式宫为私人建筑；住宅区避免拍摄居民。</p>
          <p><b>节奏</b>时间为高强度估算，受早晚高峰影响明显。每天至少预留 45 分钟机动时间。</p>
        </div>
      </section>

      <footer>
        <div className="footer-mark">TG</div>
        <p>Two days.<br />Fifteen fragments of an era.</p>
        <span>TBILISI · SOVIET ARCHITECTURE FIELD NOTES</span>
      </footer>
    </main>
  );
}
