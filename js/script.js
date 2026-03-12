// ===== util: switch screen + persist
const screens = {
  1: document.getElementById("screen1"),
  2: document.getElementById("screen2"),
  3: document.getElementById("screen3"),
  4: document.getElementById("screen4"),
  5: document.getElementById("screen5"),
  6: document.getElementById("screen6"),
  7: document.getElementById("screen7"),
  8: document.getElementById("screen8"),
  9: document.getElementById("screen9"),
  10: document.getElementById("screen10"),
  11: document.getElementById("screen11"),
  12: document.getElementById("screen12"),
  13: document.getElementById("screen13"),
  14: document.getElementById("screen14"),
  15: document.getElementById("screen15"),
  16: document.getElementById("screen16"),
  17: document.getElementById("screen17"),
  18: document.getElementById("screen18"),
  19: document.getElementById("screen19"),
  20: document.getElementById("screen20"),
  21: document.getElementById("screen21"),
  22: document.getElementById("screen22"),
  23: document.getElementById("screen23"),
  24: document.getElementById("screen24"),
  25: document.getElementById("screen25"),
  26: document.getElementById("screen26"),
  27: document.getElementById("screen27"),
  28: document.getElementById("screen28"),
  29: document.getElementById("screen29"),
  30: document.getElementById("screen30"),
  31: document.getElementById("screen31"),
  32: document.getElementById("screen32"),
  33: document.getElementById("screen33"),
  34: document.getElementById("screen34"),
  35: document.getElementById("screen35"),
  36: document.getElementById("screen36"),
  37: document.getElementById("screen37"),
  38: document.getElementById("screen38"),
  39: document.getElementById("screen39"),
  40: document.getElementById("screen40"),
  41: document.getElementById("screen41"),
  42: document.getElementById("screen42"),
  43: document.getElementById("screen43"),
  44: document.getElementById("screen44"),
  45: document.getElementById("screen45"),
  46: document.getElementById("screen46"),
  47: document.getElementById("screen47"),
  48: document.getElementById("screen48"),
  49: document.getElementById("screen49"),
  50: document.getElementById("screen50"),
  51: document.getElementById("screen51"),
  52: document.getElementById("screen52"),
  53: document.getElementById("screen53"),
  54: document.getElementById("screen54"),
  55: document.getElementById("screen55"),
  56: document.getElementById("screen56"),
  57: document.getElementById("screen57"),
  58: document.getElementById("screen58"),
  59: document.getElementById("screen59"),
  60: document.getElementById("screen60"),
  61: document.getElementById("screen61"),
  62: document.getElementById("screen62"),
  63: document.getElementById("screen63"),
  64: document.getElementById("screen64"),
  65: document.getElementById("screen65"),
  66: document.getElementById("screen66"),
  67: document.getElementById("screen67"),
  68: document.getElementById("screen68"),
  69: document.getElementById("screen69"),
  70: document.getElementById("screen70"),
  71: document.getElementById("screen71"),
  72: document.getElementById("screen72"),
  73: document.getElementById("screen73"),
  74: document.getElementById("screen74"),
  75: document.getElementById("screen75"),
  76: document.getElementById("screen76"),
  77: document.getElementById("screen77"),
  78: document.getElementById("screen78"),
  79: document.getElementById("screen79"),
  80: document.getElementById("screen80"),
  81: document.getElementById("screen81"),
  82: document.getElementById("screen82"),
  83: document.getElementById("screen83"),
  84: document.getElementById("screen84"),
  85: document.getElementById("screen85"),
  86: document.getElementById("screen86"),
  87: document.getElementById("screen87"),
  88: document.getElementById("screen88"),
  89: document.getElementById("screen89"),
  90: document.getElementById("screen90"),
  91: document.getElementById("screen91"),
  92: document.getElementById("screen92"),
  93: document.getElementById("screen93"),
  94: document.getElementById("screen94"),
};
function goTo(n) {
  Object.values(screens).forEach((s) => s && s.classList.remove("active"));
  screens[n]?.classList.add("active");
  localStorage.setItem("currentScreen", String(n));
}

// ===== nav events umum
document.getElementById("playBtn").addEventListener("click", () => goTo(2));
document.getElementById("backBtn").addEventListener("click", () => goTo(1));
document.getElementById("toPage2").addEventListener("click", () => goTo(2));
document.getElementById("p4Home").addEventListener("click", () => goTo(3));

// Home & nav di Pendahuluan
document.getElementById("introHome1").addEventListener("click", () => goTo(3));
document.getElementById("introHome2").addEventListener("click", () => goTo(3));
document.getElementById("introPrev1").addEventListener("click", () => goTo(3));
document.getElementById("introNext1").addEventListener("click", () => goTo(6));
document.getElementById("introPrev2").addEventListener("click", () => goTo(5));

// Home & nav di Deskripsi
document.getElementById("descHome1").addEventListener("click", () => goTo(3));
document.getElementById("descHome2").addEventListener("click", () => goTo(3));
document.getElementById("descPrev1").addEventListener("click", () => goTo(3));
document.getElementById("descNext1").addEventListener("click", () => goTo(8));
document.getElementById("descPrev2").addEventListener("click", () => goTo(7));

// Home & nav di Materi
document.getElementById("matHome1").addEventListener("click", () => goTo(3));
document.getElementById("matHome2").addEventListener("click", () => goTo(3));
document.getElementById("matHome3").addEventListener("click", () => goTo(3));
document.getElementById("matHome4").addEventListener("click", () => goTo(3));
document.getElementById("matHome5").addEventListener("click", () => goTo(3));
document.getElementById("matHome6").addEventListener("click", () => goTo(3));
document.getElementById("matHome7").addEventListener("click", () => goTo(3));
document.getElementById("matHome8").addEventListener("click", () => goTo(3));
document.getElementById("matHome9").addEventListener("click", () => goTo(3));
document.getElementById("matHome10").addEventListener("click", () => goTo(3));
document.getElementById("matHome11").addEventListener("click", () => goTo(3));
document.getElementById("matHome12").addEventListener("click", () => goTo(3));
document.getElementById("matHome13").addEventListener("click", () => goTo(3));
document.getElementById("matHome14").addEventListener("click", () => goTo(3));
document.getElementById("matHome15").addEventListener("click", () => goTo(3));
document.getElementById("matHome16").addEventListener("click", () => goTo(3));
document.getElementById("matHome17").addEventListener("click", () => goTo(3));
document.getElementById("matHome18").addEventListener("click", () => goTo(3));

// FIX: id yang benar 'mat9Next' (bukan 'mat9next')
document.getElementById("mat9Next") &&
  document.getElementById("mat9Next").addEventListener("click", () => goTo(10));

document.getElementById("mat10Prev").addEventListener("click", () => goTo(9));
document.getElementById("mat10Next").addEventListener("click", () => goTo(11));

document.getElementById("mat11Prev").addEventListener("click", () => goTo(10));
document.getElementById("mat11Next").addEventListener("click", () => goTo(12));

document.getElementById("mat12Prev").addEventListener("click", () => goTo(11));
document.getElementById("mat12Next").addEventListener("click", () => goTo(14));

document.getElementById("mat13Prev").addEventListener("click", () => goTo(12));
document.getElementById("mat13Next").addEventListener("click", () => goTo(14));

document.getElementById("mat14Prev").addEventListener("click", () => goTo(13));
document.getElementById("mat14Next").addEventListener("click", () => goTo(15));

document.getElementById("mat15Prev").addEventListener("click", () => goTo(14));
document.getElementById("mat15Next").addEventListener("click", () => goTo(16));

document.getElementById("mat16Prev").addEventListener("click", () => goTo(15));
document.getElementById("mat16Next").addEventListener("click", () => goTo(17));

document.getElementById("mat17Prev").addEventListener("click", () => goTo(16));
document.getElementById("mat17Next").addEventListener("click", () => goTo(18));

document.getElementById("mat18Prev").addEventListener("click", () => goTo(17));
document.getElementById("mat18Next").addEventListener("click", () => goTo(19));

document.getElementById("mat19Prev").addEventListener("click", () => goTo(18));
document.getElementById("mat19Next").addEventListener("click", () => goTo(20));

document.getElementById("mat20Prev").addEventListener("click", () => goTo(19));
document.getElementById("mat20Next").addEventListener("click", () => goTo(21));

document.getElementById("mat21Prev").addEventListener("click", () => goTo(20));
document.getElementById("mat21Next").addEventListener("click", () => goTo(22));

document.getElementById("mat22Prev").addEventListener("click", () => goTo(21));
document.getElementById("mat22Next").addEventListener("click", () => goTo(23));

document.getElementById("mat23Prev").addEventListener("click", () => goTo(22));
document.getElementById("mat23Next").addEventListener("click", () => goTo(24));

document.getElementById("mat24Prev").addEventListener("click", () => goTo(23));
document.getElementById("mat24Next").addEventListener("click", () => goTo(25));

document.getElementById("mat25Prev").addEventListener("click", () => goTo(24));
document.getElementById("mat25Next").addEventListener("click", () => goTo(26));

document.getElementById("mat26Prev").addEventListener("click", () => goTo(25));

// ===== Evaluasi
document.getElementById("evalHome0").addEventListener("click", () => goTo(3));
document.getElementById("evalStart").addEventListener("click", () => goTo(28));

document.getElementById("evalHome1").addEventListener("click", () => goTo(3));
document.getElementById("evalHome2").addEventListener("click", () => goTo(3));
document.getElementById("evalHome3").addEventListener("click", () => goTo(3));
document.getElementById("evalHome4").addEventListener("click", () => goTo(3));
document.getElementById("evalHome5").addEventListener("click", () => goTo(3));
document.getElementById("evalHome6").addEventListener("click", () => goTo(3));
document.getElementById("evalHome7").addEventListener("click", () => goTo(3));

document.getElementById("eval28Prev").addEventListener("click", () => goTo(27));

document.getElementById("eval30Prev").addEventListener("click", () => goTo(29));
document.getElementById("eval30Next").addEventListener("click", () => goTo(31));

document.getElementById("eval31Prev").addEventListener("click", () => goTo(30));
document.getElementById("eval31Next").addEventListener("click", () => goTo(32));

document.getElementById("eval32Prev").addEventListener("click", () => goTo(31));
document.getElementById("eval32Next").addEventListener("click", () => goTo(33));

document.getElementById("eval33Prev").addEventListener("click", () => goTo(32));

document.getElementById("eval34Prev").addEventListener("click", () => goTo(33));
document.getElementById("eval34Next").addEventListener("click", () => goTo(35));

// screen to h
document.getElementById("labHome") &&
  document.getElementById("labHome").addEventListener("click", () => goTo(3));
document.getElementById("labHome_37") &&
  document
    .getElementById("labHome_37")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_38") &&
  document
    .getElementById("labHome_38")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_39") &&
  document
    .getElementById("labHome_39")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_40") &&
  document
    .getElementById("labHome_40")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_41") &&
  document
    .getElementById("labHome_41")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_42") &&
  document
    .getElementById("labHome_42")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_43") &&
  document
    .getElementById("labHome_43")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_44") &&
  document
    .getElementById("labHome_44")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_45") &&
  document
    .getElementById("labHome_45")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_46") &&
  document
    .getElementById("labHome_46")
    .addEventListener("click", () => goTo(3));
document.getElementById("evalHome8") &&
  document.getElementById("evalHome8").addEventListener("click", () => goTo(3));
document.getElementById("labHome_47") &&
  document
    .getElementById("labHome_47")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_48") &&
  document
    .getElementById("labHome_48")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_49") &&
  document
    .getElementById("labHome_49")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_50") &&
  document
    .getElementById("labHome_50")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_51") &&
  document
    .getElementById("labHome_51")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_52") &&
  document
    .getElementById("labHome_52")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_53") &&
  document
    .getElementById("labHome_53")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_54") &&
  document
    .getElementById("labHome_54")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_55") &&
  document
    .getElementById("labHome_55")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_56") &&
  document
    .getElementById("labHome_56")
    .addEventListener("click", () => goTo(3));
document.getElementById("labHome_56") &&
  document
    .getElementById("labHome_57")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_58")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_59")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_new")
    .addEventListener("click", () => goTo(3));

// screen next
document.getElementById("infoNext") &&
  document.getElementById("infoNext").addEventListener("click", () => goTo(37));
document.getElementById("infoNext_37") &&
  document
    .getElementById("infoNext_37")
    .addEventListener("click", () => goTo(38));
document.getElementById("infoNext_38") &&
  document
    .getElementById("infoNext_38")
    .addEventListener("click", () => goTo(39));
document.getElementById("infoNext_39") &&
  document
    .getElementById("infoNext_39")
    .addEventListener("click", () => goTo(40));
document.getElementById("infoNext_40") &&
  document
    .getElementById("infoNext_40")
    .addEventListener("click", () => goTo(41));
document.getElementById("infoNext_41") &&
  document
    .getElementById("infoNext_41")
    .addEventListener("click", () => goTo(42));
document.getElementById("btnMath") &&
  document.getElementById("btnMath").addEventListener("click", () => goTo(43));
document.getElementById("infoNext_43") &&
  document
    .getElementById("infoNext_43")
    .addEventListener("click", () => goTo(44));
document.getElementById("descNext7") &&
  document
    .getElementById("descNext7")
    .addEventListener("click", () => goTo(45));
document.getElementById("infoNext_45") &&
  document
    .getElementById("infoNext_45")
    .addEventListener("click", () => goTo(46));
document.getElementById("eval35Next") &&
  document
    .getElementById("eval35Next")
    .addEventListener("click", () => goTo(47));
document.getElementById("btnScience") &&
  document
    .getElementById("btnScience")
    .addEventListener("click", () => goTo(29));
document.getElementById("goKegiatan1") &&
  document
    .getElementById("goKegiatan1")
    .addEventListener("click", () => goTo(30));
document.getElementById("goKegiatan2") &&
  document
    .getElementById("goKegiatan2")
    .addEventListener("click", () => goTo(49));
document.getElementById("goKegiatan3") &&
  document
    .getElementById("goKegiatan3")
    .addEventListener("click", () => goTo(35));
document.getElementById("infoNext_47") &&
  document
    .getElementById("infoNext_47")
    .addEventListener("click", () => goTo(48));
document.getElementById("infoNext_48") &&
  document
    .getElementById("infoNext_48")
    .addEventListener("click", () => goTo(70));
document.getElementById("infoNext_49") &&
  document
    .getElementById("infoNext_49")
    .addEventListener("click", () => goTo(50));
document.getElementById("infoNext_50") &&
  document
    .getElementById("infoNext_50")
    .addEventListener("click", () => goTo(51));
document.getElementById("infoNext_51") &&
  document
    .getElementById("infoNext_51")
    .addEventListener("click", () => goTo(52));
document.getElementById("btnTechno") &&
  document
    .getElementById("btnTechno")
    .addEventListener("click", () => goTo(53));
document.getElementById("infoNext_53") &&
  document
    .getElementById("infoNext_53")
    .addEventListener("click", () => goTo(54));
document.getElementById("btnEngineer") &&
  document
    .getElementById("btnEngineer")
    .addEventListener("click", () => goTo(55));
document.getElementById("infoNext_55") &&
  document
    .getElementById("infoNext_55")
    .addEventListener("click", () => goTo(56));
document.getElementById("infoNext_56") &&
  document
    .getElementById("infoNext_56")
    .addEventListener("click", () => goTo(57));
document.getElementById("labBack_45") &&
  document
    .getElementById("labBack_45")
    .addEventListener("click", () => goTo(8));
document.getElementById("labBack_46") &&
  document
    .getElementById("labBack_46")
    .addEventListener("click", () => goTo(45));
document.getElementById("labBack_37") &&
  document
    .getElementById("labBack_37")
    .addEventListener("click", () => goTo(36));
document.getElementById("labBack_38") &&
  document
    .getElementById("labBack_38")
    .addEventListener("click", () => goTo(37));
document.getElementById("labBack_39") &&
  document
    .getElementById("labBack_39")
    .addEventListener("click", () => goTo(38));
document.getElementById("labBack_40") &&
  document
    .getElementById("labBack_40")
    .addEventListener("click", () => goTo(39));
document.getElementById("labBack_41") &&
  document
    .getElementById("labBack_41")
    .addEventListener("click", () => goTo(40));
document.getElementById("labBack_42") &&
  document
    .getElementById("labBack_42")
    .addEventListener("click", () => goTo(41));
document.getElementById("labBack_43") &&
  document
    .getElementById("labBack_43")
    .addEventListener("click", () => goTo(42));
document.getElementById("labBack_44") &&
  document
    .getElementById("labBack_44")
    .addEventListener("click", () => goTo(43));
document.getElementById("labPrev_47") &&
  document
    .getElementById("labPrev_47")
    .addEventListener("click", () => goTo(35));
document.getElementById("labPrev_48") &&
  document
    .getElementById("labPrev_48")
    .addEventListener("click", () => goTo(47));
document.getElementById("labPrev_49") &&
  document
    .getElementById("labPrev_49")
    .addEventListener("click", () => goTo(48));
document.getElementById("labPrev_50") &&
  document
    .getElementById("labPrev_50")
    .addEventListener("click", () => goTo(49));
document.getElementById("labPrev_51") &&
  document
    .getElementById("labPrev_51")
    .addEventListener("click", () => goTo(50));
document.getElementById("labPrev_52") &&
  document
    .getElementById("labPrev_52")
    .addEventListener("click", () => goTo(51));
document.getElementById("eval35Prev") &&
  document
    .getElementById("eval35Prev")
    .addEventListener("click", () => goTo(29));
document.getElementById("labPrev_49") &&
  document
    .getElementById("labPrev_49")
    .addEventListener("click", () => goTo(29));
document.getElementById("labPrev_53") &&
  document
    .getElementById("labPrev_53")
    .addEventListener("click", () => goTo(42));
document.getElementById("labPrev_54") &&
  document
    .getElementById("labPrev_54")
    .addEventListener("click", () => goTo(53));
document.getElementById("labPrev_55") &&
  document
    .getElementById("labPrev_55")
    .addEventListener("click", () => goTo(42));
document.getElementById("labPrev_56").addEventListener("click", () => goTo(55));
document
  .getElementById("infoNext_33")
  .addEventListener("click", () => goTo(57));
document.getElementById("labPrev_57") &&
  document
    .getElementById("labPrev_57")
    .addEventListener("click", () => goTo(33));
    document
    .getElementById("labNext_57")
    .addEventListener("click", () => goTo(58));
    document
    .getElementById("labPrev_58")
    .addEventListener("click", () => goTo(57));
    document
    .getElementById("labNext_58")
    .addEventListener("click", () => goTo(59));
    document
    .getElementById("labPrev_59")
    .addEventListener("click", () => goTo(58));
    document
    .getElementById("gambar-6") &&
  document
    .getElementById("gambar-6")
    .addEventListener("click", () => goTo(60));

    document
    .getElementById("labNext_60")
    .addEventListener("click", () => goTo(61));
    document
    .getElementById("labPrev_new")
    .addEventListener("click", () => goTo(60));
    document
    .getElementById("labNext_new61")
    .addEventListener("click", () => goTo(62));
    document
    .getElementById("infoNext_62")
    .addEventListener("click", () => goTo(29));
     document
    .getElementById("infoNext_52")
    .addEventListener("click", () => goTo(72));
     document
    .getElementById("labNext_63")
    .addEventListener("click", () => goTo(64));
 document
    .getElementById("labHome_64")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_64")
    .addEventListener("click", () => goTo(65));

    document
    .getElementById("gambar-5") &&
  document
    .getElementById("gambar-5")
    .addEventListener("click", () => goTo(3));

    document
    .getElementById("labNext_66")
    .addEventListener("click", () => goTo(67));
    document
    .getElementById("labPrev_67")
    .addEventListener("click", () => goTo(66));
    document
    .getElementById("labNext_67")
    .addEventListener("click", () => goTo(68));
    document
    .getElementById("labPrev_68")
    .addEventListener("click", () => goTo(67));
    document
    .getElementById("labHome_68")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_67")
    .addEventListener("click", () => goTo(3));
      document
    .getElementById("labHome_66")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_68")
    .addEventListener("click", () => goTo(69));
    document
    .getElementById("labPrev_69")
    .addEventListener("click", () => goTo(68));
    document
    .getElementById("labNext_69")
    .addEventListener("click", () => goTo(53));
      document
    .getElementById("labHome_69")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("infoNext_70") &&
  document
    .getElementById("infoNext_70")
    .addEventListener("click", () => goTo(63));
    document
    .getElementById("labHome_65") 
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_65") &&
  document
    .getElementById("labNext_72")
    .addEventListener("click", () => goTo(73));
     document
    .getElementById("labPrev_72")
    .addEventListener("click", () => goTo(52));
    document
    .getElementById("labPrev_73")
    .addEventListener("click", () => goTo(72));
    document
    .getElementById("labHome_73")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_73")
    .addEventListener("click", () => goTo(71));
    document
    .getElementById("labPrev_71")
    .addEventListener("click", () => goTo(73));
     document
    .getElementById("labHome_71")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labPrev_63")
    .addEventListener("click", () => goTo(70));
    document
    .getElementById("labHome_63")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labPrev_64")
    .addEventListener("click", () => goTo(63));
    document
    .getElementById("labPrev_65")
    .addEventListener("click", () => goTo(64));
    document
    .getElementById("labPrev_66")
    .addEventListener("click", () => goTo(65));
    document
    .getElementById("labHome_66")
    .addEventListener("click", () => goTo(3));
      document
    .getElementById("labPrev_73")
    .addEventListener("click", () => goTo(72));
    document
    .getElementById("labHome_73")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_70")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_71")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_72")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labHome_73")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_72")
    .addEventListener("click", () => goTo(73));
    document
    .getElementById("labPrev_72")
    .addEventListener("click", () => goTo(71));
    document
    .getElementById("labHome_72")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labNext_73")
    .addEventListener("click", () => goTo(74));
    document
    .getElementById("labPrev_73")
    .addEventListener("click", () => goTo(72));
    document
    .getElementById("labHome_73")
    .addEventListener("click", () => goTo(3));
    document
    .getElementById("labPrev_74")
    .addEventListener("click", () => goTo(73));
    document
    .getElementById("labHome_74")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labPrev_75")
    .addEventListener("click", () => goTo(74));
    document
     .getElementById("labNext_75")
    .addEventListener("click", () => goTo(76));
    document
     .getElementById("labPrev_76")
    .addEventListener("click", () => goTo(75));
    document
    .getElementById("labHome_76")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labNext_76")
    .addEventListener("click", () => goTo(77));
    document
     .getElementById("labPrev_77")
    .addEventListener("click", () => goTo(76));
    document
    .getElementById("labHome_77")
    .addEventListener("click", () => goTo(3));
     document
    .getElementById("labNext_77")
    .addEventListener("click", () => goTo(78));
    document
     .getElementById("labNext_78")
    .addEventListener("click", () => goTo(53));
    document
     .getElementById("labPrev_78")
    .addEventListener("click", () => goTo(77));
    document
    .getElementById("labHome_78")
    .addEventListener("click", () => goTo(3));
     document
    .getElementById("labNext_56")
    .addEventListener("click", () => goTo(79));
     document
     .getElementById("labNext_79")
    .addEventListener("click", () => goTo(80));
    document
     .getElementById("labPrev_79")
    .addEventListener("click", () => goTo(56));
    document
    .getElementById("labHome_79")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_80")
    .addEventListener("click", () => goTo(81));
    document
     .getElementById("labPrev_80")
    .addEventListener("click", () => goTo(79));
    document
    .getElementById("labHome_80")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_81")
    .addEventListener("click", () => goTo(82));
    document
     .getElementById("labPrev_81")
    .addEventListener("click", () => goTo(80));
    document
    .getElementById("labHome_81")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_82")
    .addEventListener("click", () => goTo(83));
    document
     .getElementById("labPrev_82")
    .addEventListener("click", () => goTo(81));
    document
    .getElementById("labHome_82")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_83")
    .addEventListener("click", () => goTo(84));
    document
     .getElementById("labPrev_83")
    .addEventListener("click", () => goTo(82));
    document
    .getElementById("labHome_83")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labNext_84")
    .addEventListener("click", () => goTo(85));
    document
     .getElementById("labPrev_84")
    .addEventListener("click", () => goTo(83));
    document
    .getElementById("labHome_84")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labNext_85")
    .addEventListener("click", () => goTo(86));
    document
     .getElementById("labPrev_85")
    .addEventListener("click", () => goTo(84));
    document
    .getElementById("labHome_85")
    .addEventListener("click", () => goTo(3));
      document
     .getElementById("labNext_86")
    .addEventListener("click", () => goTo(87));
    document
     .getElementById("labPrev_86")
    .addEventListener("click", () => goTo(85));
    document
    .getElementById("labHome_86")
    .addEventListener("click", () => goTo(3));
      document
     .getElementById("labNext_87")
    .addEventListener("click", () => goTo(88));
    document
     .getElementById("labPrev_87")
    .addEventListener("click", () => goTo(86));
    document
    .getElementById("labHome_87")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labNext_88")
    .addEventListener("click", () => goTo(89));
    document
     .getElementById("labPrev_88")
    .addEventListener("click", () => goTo(87));
    document
    .getElementById("labHome_88")
    .addEventListener("click", () => goTo(3));
      document
     .getElementById("labNext_89")
    .addEventListener("click", () => goTo(90));
    document
     .getElementById("labPrev_89")
    .addEventListener("click", () => goTo(88));
    document
    .getElementById("labHome_89")
    .addEventListener("click", () => goTo(3));
document
     .getElementById("labNext_90")
    .addEventListener("click", () => goTo(91));
    document
     .getElementById("labPrev_90")
    .addEventListener("click", () => goTo(89));
    document
    .getElementById("labHome_90")
    .addEventListener("click", () => goTo(3));
    document
     .getElementById("labNext_91")
    .addEventListener("click", () => goTo(92));
    document
     .getElementById("labPrev_91")
    .addEventListener("click", () => goTo(90));
    document
    .getElementById("labHome_91")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_92")
    .addEventListener("click", () => goTo(93));
    document
     .getElementById("labPrev_92")
    .addEventListener("click", () => goTo(91));
    document
    .getElementById("labHome_92")
    .addEventListener("click", () => goTo(3));
     document
     .getElementById("labNext_93")
    .addEventListener("click", () => goTo(94));
    document
     .getElementById("labPrev_93")
    .addEventListener("click", () => goTo(92));
    document
    .getElementById("labHome_93")
    .addEventListener("click", () => goTo(3)); 
    document
     .getElementById("labNext_94")
    .addEventListener("click", () => goTo(43));
    document
     .getElementById("labPrev_94")
    .addEventListener("click", () => goTo(93));
    document
    .getElementById("labHome_94")
    .addEventListener("click", () => goTo(3)); 
     document
     .getElementById("labNext_54")
    .addEventListener("click", () => goTo(79));

    



    


// Klik bubble menu (Page 3)
document.querySelectorAll(".orbit .bubble").forEach((b) => {
  b.addEventListener("click", () => {
    const act = (b.dataset.action || "").toLowerCase();
    if (act === "profil") return goTo(4);
    if (act === "pendahuluan") return goTo(5);
    if (act === "deskripsi") return goTo(7);
    if (act === "materi") return goTo(9);
    if (act === "evaluasi") return goTo(27);
    if (act === "virtuallab") return goTo(36);
    if (act === "biodata") return goTo(2);
    alert("Menu: " + act);
  });
});

// ===== interaksi pilihan jawaban sederhana
document.querySelectorAll("#screen28 .choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    // reset state
    document.querySelectorAll("#screen28 .choice").forEach((c) => {
      c.classList.remove("selected", "correct", "wrong");
      const input = c.querySelector('input[type="radio"]');
      if (input) input.checked = false;
    });
    // set selected
    choice.classList.add("selected");
    const input = choice.querySelector('input[type="radio"]');
    if (input) input.checked = true;
    // feedback cepat
    if (choice.dataset.correct === "true") {
      choice.classList.remove("selected");
      choice.classList.add("correct");
    } else {
      choice.classList.remove("selected");
      choice.classList.add("wrong");
    }
  });
});

// ===== form profil (Page 2)
const form = document.getElementById("formProfil");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem("profilSiswa", JSON.stringify(data));
    goTo(3);
  });
}

// ===== restore state on load
(function init() {
  try {
    const saved = JSON.parse(localStorage.getItem("profilSiswa") || "{}");
    if (form && saved.nama) form.elements["nama"].value = saved.nama;
    if (form && saved.email) form.elements["email"].value = saved.email;
  } catch {}
  const last = Number(localStorage.getItem("currentScreen") || 1);
  // if (last===3 && !localStorage.getItem('profilSiswa')) { goTo(2); return; }
  // izinkan semua halaman yang tersedia (termasuk 36)
  const allowed = new Set([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48,
  ]);
  goTo(allowed.has(last) ? last : 1);
})()

document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("labNext_new1");
  const prevBtn = document.getElementById("labPrev_2");
  const homeBtn1 = document.getElementById("labHome66");
  const homeBtn2 = document.getElementById("labHome_2");

  const screen1 = document.getElementById("screen_new");
  const screen2 = document.getElementById("screen_new2");

  if (nextBtn && screen1 && screen2) {
    nextBtn.addEventListener("click", function () {
      screen1.style.display = "none";
      screen1.classList.remove("active");

      screen2.style.display = "block";
      screen2.classList.add("active");
    });
  }

  if (prevBtn && screen1 && screen2) {
    prevBtn.addEventListener("click", function () {
      screen2.style.display = "none";
      screen2.classList.remove("active");

      screen1.style.display = "block";
      screen1.classList.add("active");
    });
  }

  if (homeBtn1) {
    homeBtn1.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  if (homeBtn2) {
    homeBtn2.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});
