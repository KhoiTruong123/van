import { createI18n } from "vue-i18n";

// Import messages (bạn có thể viết thẳng trong file hoặc tách riêng)
const messages = {
  vi: {
    Trang_chu: "Trang chủ",
    Su_kien: "Sự kiện",
    Ve_Van: "Về Vân",
    Am_nhac: "Âm nhạc",
    Chuong_trinh_bieu_dien: "Chương trình biểu diễn",
    Tin_tuc: "Tin tức",
    Hinh_anh: "Hình ảnh",
    xem_them: "Xem thêm",
    Lien_he: "Liên hệ",
    Ly_lich_tua: "Lý lịch",
    Loi_tua: `Một buổi hòa nhạc, đối với Vân, là sự kết hợp hài hòa của các tác phẩm âm nhạc dựa trên một cốt truyện liên tục xuyên suốt chương trình. Những khía cạnh sắc màu, đa dạng của cuộc sống hàng ngày tích tụ suốt nhiều năm qua đã tạo cho tôi một nguồn cảm hứng to lớn để thúc đẩy tôi nỗ lực truyền tải những trải nghiệm cuộc sống sâu sắc đến khán giả trong mỗi đêm nhạc đầy cảm xúc. Với những chương trình này, tôi có một ước mơ khát khao chân thành được mang lại sự an ủi cho những ai đang phải vật lộn với sự cô đơn, thắp lên hy vọng cho những ai đang ở vực thẳm, tiếp sức cho những người đang muốn từ bỏ, và chắp cánh những ước mơ to lớn với lý tưởng sống cao đẹp.`,

    Ly_lich: `Nghệ sĩ piano trẻ người Việt Nam Hồ Khánh Vân là một trong những tài năng triển vọng nhất của thế hệ của cô và trong làng nhạc cổ điển Việt Nam hiện tại. Với tiếng đàn chứa đựng đầy hình tượng đặc sắc, sự dẫn dắt âm nhạc lôi cuốn, không rời mắt, cùng với cách dẫn chương trình giản dị, chân thành, truyền tải những thông điệp ý nghĩa sâu sắc về cuộc sống trong mỗi buổi hòa nhạc, cô đã hoàn toàn lôi cuốn khán giả trên toàn thế giới cho đến những phút cuối cùng.

Vân đã khẳng định tên tuổi nghệ sĩ của mình qua các giải thưởng tại nhiều cuộc thi piano quốc gia và quốc tế ở châu Âu. Các giải thưởng của cô bao gồm Giải Nhất tại Cuộc thi Âm nhạc Quốc tế London (2024), Giải Nhất và Giải Nuovo-Imaie tại Cuộc thi Piano Quốc tế Mauro Paolo Monopoli ở Ý (2023) và Giải Sonata Cổ điển tại Cuộc thi Piano Verona ở Ý (2023). Trước đó, cô đã giành Giải Nhất tại Cuộc thi piano quốc gia Hungary (2018), Giải Nhì tại Cuộc thi piano quốc tế Ile-de-France ở Paris (2018) và Giải Ba tại Cuộc thi âm nhạc quốc tế Danubia-Talents ở Vienna (2018). Những thành công này đã mang lại cho cô những buổi hòa nhạc tại các sân khấu lớn trên thế giới như ở Đức, Pháp, Hungary, Áo, Ý, Bồ Đào Nha và Việt Nam. 

Trong những năm gần đây, Vân đã biểu diễn tại các liên hoan âm nhạc quốc tế nổi tiếng như Liên hoan Ravel, Tuần lễ hòa nhạc Goslar, Liên hoan Mendelssohn quốc tế, Học viện mùa hè quốc tế Mozarteum, Hiệp hội Mélomanes Côte Sud. Cô đã biểu diễn với tư cách là nghệ sĩ độc tấu cùng Dàn nhạc Giao hưởng Kaliningrad và Dàn nhạc Soundiff, dưới sự chỉ huy của các nhạc trưởng nổi tiếng như Mikhail Kirchhoff và Benedetto Montebello. Vào ngày 22 tháng 9 năm 2023, Hồ Khánh Vân đã phát hành album đầu tay thành công với hãng đĩa Empirica trong thời gian theo học chương trình cử nhân, trong đó cô trình bày các tác phẩm piano của các nhà soạn nhạc lãng mạn vĩ đại của thế kỷ 19 như F. Chopin, F. Mendelssohn, R. Schumann và F. Liszt. Cô cũng được giới thiệu trong các tin tức và phỏng vấn của NDR, barlettalive và francetvinfo ở Đức, Ý và Pháp.

Hồ Khánh Vân sinh năm 2002 trong một gia đình không có truyền thống âm nhạc ở Thành phố Hồ Chí Minh, Việt Nam, và bắt đầu học piano từ năm 8 tuổi. Trong 5 năm học tại Nhạc viện Thành phố Hồ Chí Minh, cô được hướng dẫn bởi giảng viên Lê Kim Thanh và Thạc sĩ Trần Thu Lê, cho đến khi cô chuyển đến Budapest, Hungary, nơi cô học với Giáo sư György Nádor và Tiến sĩ Hargitai Imre trong 2 năm. Từ năm 2021, cô tiếp tục theo học chương trình cử nhân với Giáo sư Stepan Simonyan tại Trường Cao đẳng Âm nhạc và Kịch nghệ Hamburg và hiện đang bắt đầu chương trình thạc sĩ vào năm 2025 trong lớp của Giáo sư Hubert Rutkowski. Trong khuôn khổ chương trình đào tạo âm nhạc của mình, Hồ Khánh Vân đã tham gia nhiều khóa học thạc sĩ với các nghệ sĩ nổi tiếng và nhà giáo ưu tú như Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Beroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, Rena Shereshevskaya.`,
    ngay_4_thang_7_2025_20_30: "4 tháng 7 năm 2025 - 20:30",
    ngay_2_tháng_1_2025_20_30: "2 tháng 1 năm 2025 - 20:30",
    ngay_2_tháng_1_2025_17_30: "2 tháng 1 năm 2025 - 17:30",
    place: "C. Bechstein Centrum, ChilehausHamburg, Đức",
    bieu_dien_tot_nghiep: "Chương trình độc tấu / Biểu diễn tốt nghiệp",
    mot_doi_nguoi: "Chương trình độc tấu / Một đời người",
    ly_tuong_song: "Chương trình độc tấu / Lý tưởng sống",
    ly_tuong_song_desc:
      "D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213\nW.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457\nF. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a",
    bieu_dien_tot_nghiep_desc:
      'Lớp GS. Stepan Simonian \n J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ "Nghệ thuật của phức điệu", BWV 1080 \nW.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457 \nF. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op. 61 \nM. Ravel (1875-1937): La Valse, M. 72',
    mot_doi_nguoi_desc:
      "J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ 'Nghệ thuật của phức điệu', BWV 1080 \n J. Haydn (1732-1809): Bản Sonata cho piano số 60 cung Đô trưởng , Hob/XVI: 50\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 23 cung Fa thứ, Op. 57\nF. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op .61",
    Contact: `Liên hệ  
Hãy chia sẻ câu chuyện của bạn!  
Mỗi một chủ đề được kể trong các buổi diễn đều bắt nguồn từ những câu chuyện và trải nghiệm chân thực mà Khánh Vân có cơ hội lắng nghe và thấu hiểu.  

Gửi thư về: hokhanhvanpianist@gmail.com  
SĐT: +49 159 0648 5758  

Kết nối:  
- YouTube: https://youtube.com/@hokhanhvanpianist  
- Facebook: https://www.facebook.com/hokhanhvanpianist  
- Instagram: https://www.instagram.com/hokhanhvanpianist/  
- Spotify: https://open.spotify.com/artist/7ITTvBdoCqXRKt1SnuV13l  
- SoundCloud: https://soundcloud.com/hokhanhvanpianist`,
  },

  en: {
    Trang_chu: "Homepage",
    Su_kien: "Events",
    Ve_Van: "About Vân",
    Am_nhac: "Music",
    Chuong_trinh_bieu_dien: "Repertoire",
    Tin_tuc: "News & Press",
    Hinh_anh: "Gallery",
        xem_them: "See more",
    Lien_he: "Contact",
    Ly_lich_tua: "Biography",
    Loi_tua: `"A concert", to me, is a harmonious blend of musical works based on a continuous storyline throughout a program. Through the years, the inspiration collected from the many facets of our daily life has given me the strive to convey these poignant life experiences to the audience in every soulful musical evening. My heartfelt desire and my greatest will as an artist ever since bringing this experience to life, is to offer solace to those grappling with desolation, to ignite hope in those facing despair, to empower those giving up on themselves, and to encourage those, whose noble aspirations will bring light to the future.`,

    Ly_lich: `The young Vietnamese pianist Hồ Khánh Vân is one of the most promising talents of her generation and in the Vietnamese classical music scene. Her distinctive, evocative playing, captivating musical expressions that keeps the audience spellbound, and her simple, sincere presentation style that conveys profound life messages in each concert had audiences around the world completely captivated until the very last minute.

Vân has established her reputation as an artist through awards at numerous national and international piano competitions in Europe. Her awards include First Prize at the London International Music Competition (2024), First Prize and the Nuovo-Imaie Prize at the Mauro Paolo Monopoli International Piano Competition in Italy (2023), and the Classical Sonata Prize at the Verona Piano Competition in Italy (2023). Previously, she won First Prize at the Hungarian National Piano Competition (2018), Second Prize at the Ile-de-France International Piano Competition in Paris (2018) and Third Prize at the Danubia-Talents International Music Competition in Vienna (2018). These successes have earned her concert engagements at major venues worldwide, including in Germany, France, Hungary, Austria, Italy, Portugal and Vietnam. 

In recent years, Vân has performed at renowned international music festivals such as the Ravel Festival, Goslar Konzertarbeitswochen, International Mendelssohn Festival, International Summer Academy Mozarteum, and Mélomanes Côte Sud Association. She has performed as a soloist with the Kaliningrad Symphony Orchestra and the Soundiff Orchestra, under the baton of renowned conductors such as Mikhail Kirchhoff and Benedetto Montebello. On September 22nd in 2023, Hồ Khánh Vân released her successful debut album with Empirica Label while studying for her bachelor's degree, featuring piano works by the great Romantic composers of the 19th century: F. Chopin, F. Mendelssohn, R. Schumann, and F. Liszt. Vân has also been featured in news reports and interviews by NDR, barlettalive, and francetvinfo in Germany, Italy, and France.

Hồ Khánh Vân was born in 2002 to a into a family with no musical background in Ho Chi Minh City, Vietnam, and began learning piano at the age of 8. During her five years at the Ho Chi Minh City Conservatory of Music, her mentors were Lê Kim Thanh and Trần Thu Lê, until she moved to Budapest, Hungary, where she studied for two years with Prof. György Nádor and Dr. Hargitai Imre. Since 2021, she has been pursuing her bachelor's degree with Prof. Stepan Simonyan at the Hamburg University of Music and Theater, and she will embark her master's studies in 2025 in the class of Prof. Hubert Rutkowski. As part of her musical education, Hồ Khánh Vân has participated in various masterclasses with renowned musicians and distinguished pedagogues such as Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Béroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, and Rena Shereshevskaya.`,
    ngay_4_thang_7_2025_20_30: "July 4th, 2025 - 20:30",
    ngay_2_tháng_1_2025_20_30: "January 2nd, 2025 - 20:30",
    ngay_2_tháng_1_2025_17_30: "January 2nd, 2025 - 17:30",
    place: "C. Bechstein Centrum, ChilehausHamburg, Germany",
    bieu_dien_tot_nghiep: "Piano Recital | Bachelors Graduation ",
    mot_doi_nguoi: "Piano Recital / A Human's Life",
    ly_tuong_song: "Piano Recital / The Tenacity of Life",
    ly_tuong_song_desc:
      "D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 213\nW.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457\nF. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35\nL.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a",
    bieu_dien_tot_nghiep_desc:
      "Class of Prof. Stepan Simonian\nJ.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080\nW.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457\nF. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61\nM. Ravel (1875-1937): La Valse, M. 72",
    mot_doi_nguoi_desc:
      "J.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080\nJ. Haydn (1732-1809): Piano Sonata No. 60 in C major, Hob/XVI: 50\nL.v. Beethoven (1770-1827): Piano Sonata No. 23 in F minor, Op. 57\nF. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61",
    Contact: `Contact  
Voice your stories through music!  
Every recital is inspired by true stories and real-life experiences that Vân had the chance to hear and feel.  

Email: hokhanhvanpianist@gmail.com  
Phone: +49 159 0648 5758  

Connect:  
- YouTube: https://youtube.com/@hokhanhvanpianist  
- Facebook: https://www.facebook.com/hokhanhvanpianist  
- Instagram: https://www.instagram.com/hokhanhvanpianist/  
- Spotify: https://open.spotify.com/artist/7ITTvBdoCqXRKt1SnuV13l  
- SoundCloud: https://soundcloud.com/hokhanhvanpianist`,
  },
  de: {
    Trang_chu: "Home",
    Su_kien: "Veranstaltungen",
    Ve_Van: "Über Vân",
    Am_nhac: "Musik",
    Chuong_trinh_bieu_dien: "Repertoire",
    Tin_tuc: "Presse",
    Hinh_anh: "Galerie",
        xem_them: "Mehr sehen",
    Lien_he: "Kontakt",
    Ly_lich_tua: "Biografie",
    Loi_tua: `„Ein Konzert“ ist für mich eine harmonische Mischung aus musikalischen Werken, die auf einer durchgehenden Geschichte basieren. Die Inspiration, die ich im Laufe der Jahre aus den vielen Facetten unseres täglichen Lebens gesammelt habe, hat mir das Bestreben gegeben, diese ergreifenden Lebenserfahrungen dem Publikum in jedem gefühlvollen musikalischen Abend zu vermitteln. Mein Herzenswunsch und mein größter Wille als Künstlerin, seit ich diese Erfahrung zum Leben erweckt habe, ist es, jenen Trost zu spenden, die mit Trostlosigkeit zu kämpfen haben; Hoffnung in jenen zu entfachen, die verzweifelt sind; jenen Kraft zu geben, die sich selbst aufgeben; und jene zu ermutigen, deren edle Bestrebungen Licht in die Zukunft bringen werden.`,

    Ly_lich: `Die junge vietnamesische Pianistin Hồ Khánh Vân ist eine der vielversprechendsten Talente ihrer Generation und der vietnamesischen klassischen Musikszene. Ihre dimensional zauberhafte Klänge, fesselnden leidenschaftliche Musikausdrücke, mit ihrer schlichter, aufrichtiger und verständlichen Moderation der tiefgründige Lebensbotschaften bei jedem Konzert haben das Publikum weltweit bis zur letzten Minute völlig in ihren Bann gezogen.

Vân hat sich durch Auszeichnungen bei zahlreichen nationalen und internationalen Klavierwettbewerben in Europa einen Namen als Künstlerin gemacht. Zu ihren Auszeichnungen gehören der 1. Preis beim London Internationalen Musikwettbewerb (2024), 1. Preis und der Nuovo-Imaie-Preis beim Mauro Paolo Monopoli Internationalen Klavierwettbewerb in Italien (2023) und der Klassik-Sonaten-Preis beim Verona Klavierwettbewerb in Italien (2023). Zuvor erhielt sie den 1. Preis beim Ungarischen Nationalen Klavierwettbewerb (2018), den 2. Preis beim Ile-de-France Internationalen Klavierwettbewerb in Paris (2018) und den 3. Preis beim Danubia-Talents Internationalen Musikwettbewerb in Wien (2018). Diese Erfolge haben ihr Konzertauftritte an bedeutenden Veranstaltungsorten weltweit eingebracht, darunter in Deutschland, Frankreich, Ungarn, Österreich, Italien, Portugal und Vietnam. 

In den letzten Jahren trat Vân bei renommierten internationalen Musikfestivals wie dem Ravel Festival, den Goslarer Konzertarbeitswochen, dem Internationalen Mendelssohn Festival, der Internationalen Sommerakademie Mozarteum und der Mélomanes Côte Sud Association auf. Sie war als Solistin mit dem Kaliningrader Symphonieorchester und dem Soundiff Orchestra unter der Leitung renommierter Dirigenten wie Mikhail Kirchhoff und Benedetto Montebello aufgetreten. Am 22. September 2023 veröffentlichte Hồ Khánh Vân während ihres Bachelorstudiums ihr erfolgreiches Debütalbum bei Empirica-Label mit Klavierwerken der großen romantischen Komponisten des 19. Jahrhunderts: F. Chopin, F. Mendelssohn, R. Schumann und F. Liszt. Vân wurde auch in Nachrichtenberichten und Interviews von NDR, barlettalive und francetvinfo in Deutschland, Italien und Frankreich vorgestellt.

Hồ Khánh Vân wurde in 2002 von einer nicht-musikalischen Familie in Ho-Chi-Minh-Stadt, Vietnam, geboren und begann ihre Klavierausbildung im Alter von 8 Jahren. Während 5 Jahren im Ho-Chi-Minh-Musikkonservatorium waren ihre Mentoren Le Kim Thanh und Tran Thu Le, bis sie nach Budapest, Ungarn zog, wo sie 2 Jahre lang bei Prof. György Nádor und Dr. Hargitai Imre studierte. Seit 2021 setzt sie ihr Bachelorstudium bei Prof. Stepan Simonyan an der Hochschule für Musik und Theater Hamburg fort und derzeit wird ihr Masterstudium in 2025 in der Klasse von Prof. Hubert Rutkowski anfangen. Im Rahmen ihrer musikalischen Ausbildung hat Hồ Khánh Vân an verschiedenen Meisterkursen mit berühmten Musikern wie Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Béroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, Rena Shereshevskaya teilgenommen.`,
    ngay_4_thang_7_2025_20_30: "4. Juli 2025 - 20:30",
    ngay_2_tháng_1_2025_20_30: "2. Januar 2025 - 20:30",
    ngay_2_tháng_1_2025_17_30: "2. Januar 2025 - 17:30",
    place: "C. Bechstein Centrum, ChilehausHamburg, Deutschland",
    bieu_dien_tot_nghiep: " Klavierabend | Bachelorprüfung",
    Mot_doi_nguoi: "Klavierabend | Ein Menschenleben",
    ly_tuong_song: "Klavierabend | Lebenswille",
    ly_tuong_song_desc:
      "D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213\nW.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457\nF. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a",
    bieu_dien_tot_nghiep_desc:
      "Klasse Prof. Stepan Simonian\nJ.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080\nW.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457\nF. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61 \nM. Ravel (1875-1937): La Valse, M. 72",
    mot_doi_nguoi_desc:
      "J.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080\nJ. Haydn (1732-1809): Klaviersonate Nr. 60 in C-Dur, Hob/XVI: 50\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 23 in f-Moll, op. 57\nF. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61 ",
    Contact: `Kontakt  
Erzähle Ihre Geschichte!  
Jedes Konzert ist von wahren Geschichten und Lebenserfahrungen inspiriert, die Vân hören und fühlen durfte.  

E-Mail: hokhanhvanpianist@gmail.com  
Telefon: +49 159 0648 5758  

Verbinden:  
- YouTube: https://youtube.com/@hokhanhvanpianist  
- Facebook: https://www.facebook.com/hokhanhvanpianist  
- Instagram: https://www.instagram.com/hokhanhvanpianist/  
- Spotify: https://open.spotify.com/artist/7ITTvBdoCqXRKt1SnuV13l  
- SoundCloud: https://soundcloud.com/hokhanhvanpianist`,
  },
};

const i18n = createI18n({
  legacy: false, // dùng Composition API
  locale: "vi", // ngôn ngữ mặc định
  fallbackLocale: "en",
  messages,
});

export default i18n;
