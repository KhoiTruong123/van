import { createI18n } from "vue-i18n";

// Import messages (bạn có thể viết thẳng trong file hoặc tách riêng)
const messages = {
        vi: {
                Trang_chu: "Trang chủ",
                Su_kien: "Sự kiện",
                Ve_Van: "Về Vân",
                Am_nhac: "Âm nhạc",
                Chuong_trinh_bieu_dien: "Chương trình\nbiểu diễn",
                Tin_tuc: "Tin tức",
                Hinh_anh: "Hình ảnh",
                xem_them: "Xem thêm",
                Lien_he: "Liên hệ",
                Ly_lich_tua: "Lý lịch",
                Ly_lich_ngan: "Tiểu sử nghệ sĩ",
                Loi_tua: `Một buổi hòa nhạc, đối với Vân, là sự kết hợp hài hòa của các tác phẩm âm nhạc dựa trên một cốt truyện liên tục xuyên suốt chương trình. Những khía cạnh sắc màu, đa dạng của cuộc sống hàng ngày tích tụ suốt nhiều năm qua đã tạo cho tôi một nguồn cảm hứng to lớn để thúc đẩy tôi nỗ lực truyền tải những trải nghiệm cuộc sống sâu sắc đến khán giả trong mỗi đêm nhạc đầy cảm xúc. Với những chương trình này, tôi có một ước mơ khát khao chân thành được mang lại sự an ủi cho những ai đang phải vật lộn với sự cô đơn, thắp lên hy vọng cho những ai đang ở vực thẳm, tiếp sức cho những người đang muốn từ bỏ, và chắp cánh những ước mơ to lớn với lý tưởng sống cao đẹp.`,

                Ly_lich: `Nghệ sĩ piano trẻ người Việt Nam Hồ Khánh Vân là một trong những tài năng triển vọng nhất của thế hệ của cô và trong làng nhạc cổ điển Việt Nam hiện tại. Với tiếng đàn chứa đựng đầy hình tượng đặc sắc, sự dẫn dắt âm nhạc lôi cuốn, không rời mắt, cùng với cách dẫn chương trình giản dị, chân thành, truyền tải những thông điệp ý nghĩa sâu sắc về cuộc sống trong mỗi buổi hòa nhạc, cô đã hoàn toàn lôi cuốn khán giả trên toàn thế giới cho đến những phút cuối cùng.\n

Vân đã khẳng định tên tuổi nghệ sĩ của mình qua các giải thưởng tại nhiều cuộc thi piano quốc gia và quốc tế ở châu Âu. Các giải thưởng của cô bao gồm Giải Nhất tại Cuộc thi Âm nhạc Quốc tế London (2024), Giải Nhất và Giải Nuovo-Imaie tại Cuộc thi Piano Quốc tế Mauro Paolo Monopoli ở Ý (2023) và Giải Sonata Cổ điển tại Cuộc thi Piano Verona ở Ý (2023). Trước đó, cô đã giành Giải Nhất tại Cuộc thi piano quốc gia Hungary (2018), Giải Nhì tại Cuộc thi piano quốc tế Ile-de-France ở Paris (2018) và Giải Ba tại Cuộc thi âm nhạc quốc tế Danubia-Talents ở Vienna (2018). Những thành công này đã mang lại cho cô những buổi hòa nhạc tại các sân khấu lớn trên thế giới như ở Đức, Pháp, Hungary, Áo, Ý, Bồ Đào Nha và Việt Nam.\n

Trong những năm gần đây, Vân đã biểu diễn tại các liên hoan âm nhạc quốc tế nổi tiếng như Liên hoan Ravel, Tuần lễ hòa nhạc Goslar, Liên hoan Mendelssohn quốc tế, Học viện mùa hè quốc tế Mozarteum, Hiệp hội Mélomanes Côte Sud. Cô đã biểu diễn với tư cách là nghệ sĩ độc tấu cùng Dàn nhạc Giao hưởng Kaliningrad và Dàn nhạc Soundiff, dưới sự chỉ huy của các nhạc trưởng nổi tiếng như Mikhail Kirchhoff và Benedetto Montebello. Vào ngày 22 tháng 9 năm 2023, Hồ Khánh Vân đã phát hành album đầu tay thành công với hãng đĩa Empirica trong thời gian theo học chương trình cử nhân, trong đó cô trình bày các tác phẩm piano của các nhà soạn nhạc lãng mạn vĩ đại của thế kỷ 19 như F. Chopin, F. Mendelssohn, R. Schumann và F. Liszt. Cô cũng được giới thiệu trong các tin tức và phỏng vấn của NDR, barlettalive và francetvinfo ở Đức, Ý và Pháp.\n

Hồ Khánh Vân sinh năm 2002 trong một gia đình không có truyền thống âm nhạc ở Thành phố Hồ Chí Minh, Việt Nam, và bắt đầu học piano từ năm 8 tuổi. Trong 5 năm học tại Nhạc viện Thành phố Hồ Chí Minh, cô được hướng dẫn bởi giảng viên Lê Kim Thanh và Thạc sĩ Trần Thu Lê, cho đến khi cô chuyển đến Budapest, Hungary, nơi cô học với Giáo sư György Nádor và Tiến sĩ Hargitai Imre trong 2 năm. Từ năm 2021, cô tiếp tục theo học chương trình cử nhân với Giáo sư Stepan Simonyan tại Trường Đại học Âm nhạc và Vũ kịch Hamburg và hiện đang bắt đầu chương trình thạc sĩ vào năm 2025 trong lớp của Giáo sư Hubert Rutkowski. Trong khuôn khổ chương trình đào tạo âm nhạc của mình, Hồ Khánh Vân đã tham gia nhiều khóa học thạc sĩ với các nghệ sĩ nổi tiếng và nhà giáo ưu tú như Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Beroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, Rena Shereshevskaya.`,
                ngay_4_thang_7_2025_20_30: "4 tháng 7, 2025 - 20:30",
                ngay_2_tháng_1_2025_20_30: "2 tháng 1, 2025 - 20:30",
                ngay_2_tháng_1_2025_17_30: "2 tháng 1, 2025 - 17:30",
                place_bieu_dien_tot_nghiep: "C. Bechstein Centrum, Chilehaus -- Hamburg, Đức",
                ngay_29_thang_12_2024_19_00: "29 tháng 12, 2024 - 19:00",
                ngay_4_tháng_5_2024_19_00: "4 tháng 5, 2024 - 19:00",
                place_tro_ve: "Trung tâm Văn học Nghệ thuật -- Tp. Hồ Chí Minh, Việt Nam",
                tro_ve: "Chương trình độc tấu / Trở về",
                place_ly_tuong_song: "John Robert Powers VN -- Tp. Hồ Chí Minh, Việt Nam",
                tro_ve_desc:
                        "F. Mendelssohn (1809-1847): Bản số 1 cung Mi trưởng từ 'Những bài ca không lời', Op. 19\nW.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457\nF. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 ",
                ngay_15_tháng_12_2024_19_30: "15 tháng 12, 2024 - 19:30",
                place_cuoc_tim_kiem: "C. Bechstein VN -- Tp. Hồ Chí Minh, Việt Nam",
                cuoc_tim_kiem: "Chương trình độc tấu / Cuộc tìm kiếm",
                cuoc_tim_kiem_desc:
                        "D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 23 cung Fa thứ, Op. 57\nF. Schubert/F. Liszt: 'Der Müller und der Bach' từ 'Die Schöne Müllerin', D 795 số 2\nR. Schumann (1810-1856): Bản Etude Giao hưởng, Op. 13",
                ngay_14_tháng_12_2024_18_30: "14 tháng 12, 2024 - 18:30",
                place_hanh_trinh_giac_mo:
                        "Steinway & Sons VN, Crescent Mall -- Tp. Hồ Chí Minh, Việt Nam",
                hanh_trinh_giac_mo: "Chương trình độc tấu / Hành trình giấc mơ",
                hanh_trinh_giac_mo_desc:
                        "D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 1\nJ. Haydn (1732-1809): Bản Sonata cho piano số 60 cung Đô trưởng , Hob/XVI: 50\nF. Chopin (1810-1849): Bản Ballade số 4 cung Fa thứ, Op. 52\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 31 cung La-giáng trưởng, Op. 110\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 ",
                ngay_7_tháng_7_2024_20_00: "7 tháng 7, 2024 - 20:00",
                place_tac_pham_cho_piano_va_Cello: "Église Saint Nicolas -- Capbreton, Pháp",
                tac_pham_cho_piano_va_Cello:
                        "Chương trình hòa tấu / Tác phẩm cho Piano và  Cello",
                tac_pham_cho_piano_va_Cello_desc:
                        "Maria-Andrea Mendoza, Cello\n Hồ Khánh Vân, Piano\nJ.S. Bach (1685-1750): Bản Suite cho Cello số 1 cung Sol trưởng, BWV 1007\nL.v Beethoven (1770-1827): Bản Sonata cho Cello và Piano số 1 cung Fa trưởng, Op. 5\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 \nD. Shostakovich (1906-1975): Bản Trio cho Piano, Violin và Cello số 1 cung Đô thứ, Op. 8",
                ngay_4_thang_5_2024_19_00: "4 tháng 5, 2024 - 19:00",
                place_bieu_dien_hoc_vu: "Orchesterstudio, HfMT Hamburg -- Hamburg, Đức",
                bieu_dien_hoc_vu: "Biểu diễn học vụ",
                bieu_dien_hoc_vu_desc:
                        "Lớp GS. Stepan Simonian\nF. Liszt (1811-1886): Après une lecture de Dante: Fantasia quasi Sonata",
                place: "C. Bechstein Centrum, ChilehausHamburg, Đức",
                bieu_dien_tot_nghiep: "Chương trình độc tấu / Biểu diễn tốt nghiệp",
                mot_doi_nguoi: "Chương trình độc tấu / Một đời người",
                place_mot_doi_nguoi: "John Robert Powers VN -- Tp. Hồ Chí Minh, Việt Nam",
                ly_tuong_song: "Chương trình độc tấu / Lý tưởng sống",
                ly_tuong_song_desc:
                        "D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213\nW.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457\nF. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a",
                bieu_dien_tot_nghiep_desc:
                        'Lớp GS. Stepan Simonian \n J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ "Nghệ thuật của phức điệu", BWV 1080 \nW.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457 \nF. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op. 61 \nM. Ravel (1875-1937): La Valse, M. 72',
                mot_doi_nguoi_desc:
                        "J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ 'Nghệ thuật của phức điệu', BWV 1080 \n J. Haydn (1732-1809): Bản Sonata cho piano số 60 cung Đô trưởng , Hob/XVI: 50\nL.v. Beethoven (1770-1827): Bản Sonata cho piano số 23 cung Fa thứ, Op. 57\nF. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op .61",
                tac_pham_giao_huong: "Tác phẩm \n giao hưởng",
                tac_pham_giao_huong_noi_dung:
                        "<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>\nBản Piano Concerto số 17 cung Sol trưởng, K. 453\nBản Piano Concerto số 20 cung Rê thứ, K. 466	\nBản Piano Concerto số 21 cung Đô trưởng, K. 467	\nBản Piano Concerto số 23 cung La trưởng, K. 488	\n<strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>\nBản Piano Concerto số 3 cung Đô thứ, Op. 37\nBản Piano Concerto số 4 cung Sol trưởng, Op. 58\n<strong style='color:#572219;font-size:22px'>F.Chopin (1810-1849)</strong>\nBản Piano Concerto số 1 cung Mi thứ, Op. 11\n<strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>\nBản Piano Concerto số 2 cung Si-giáng trưởng, Op. 83	",
                chuong_trinh_doc_tau: "Chương trình\n độc tấu",
                chuong_trinh_doc_tau_noi_dung: `
<strong style='color:#572219;font-size:22px'>Chương trình I: Lý tưởng sống</strong>
D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213
W.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457
F. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a
<strong style='color:#572219;font-size:22px'>Chương trình II: Trở về </strong>
F. Mendelssohn (1809-1847): Bản số 1 cung Mi trưởng từ "Những bài ca không lời", Op. 19
W.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457
F. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a
F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254
<strong style='color:#572219;font-size:22px'>Chương trình III: Cuộc tìm kiếm</strong>
D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 23 cung Fa thứ, Op. 57
F. Schubert/F. Liszt: "Der Müller und der Bach" từ "Die Schöne Müllerin", D 795 số 2
R. Schumann (1810-1856): Bản Etude Giao hưởng, Op. 13
<strong style='color:#572219;font-size:22px'>Chương trình IV: Ánh sáng</strong>
J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ "Nghệ thuật của phức điệu", BWV 1080
W.A. Mozart (1756-1791): Bản Sonata cho piano số 14 cung Đô thứ , K. 457
F. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op. 61
M. Ravel (1875-1937): La Valse, M. 72
<strong style='color:#572219;font-size:22px'>Chương trình V: Một đời người</strong>
J.S. Bach (1685-1750): Bản Contrapunktus số 1 từ "Nghệ thuật của phức điệu", BWV 1080
J. Haydn (1732-1809): Bản Sonata cho piano số 60 cung Đô trưởng , Hob/XVI: 50
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 23 cung Fa thứ, Op. 57
F. Chopin (1810-1849): Bản Polonaise-Fantasie cung La-giáng trưởng, Op .61
<strong style='color:#572219;font-size:22px'>Chương trình VI: Sự tái ngộ</strong>
D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 213
F. Chopin (1810-1849): Bản Sonata cho piano số 2 cung Si-giáng thứ, Op. 35
J.S. Bach/W. Kempff: Siciliano từ Bản Sonata cho sáo cung Mi-giáng trưởng, BWV 1031
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 26 cung Mi-giáng trưởng, Op. 81a
<strong style='color:#572219;font-size:22px'>Chương trình VII: Hành trình giấc mơ</strong>
D. Scarlatti (1685-1757): Bản Sonata cho đàn phím cung Rê thứ , K. 1
F. Chopin (1810-1849): Bản Ballade số 4 cung Fa thứ, Op. 52
L.v. Beethoven (1770-1827): Bản Sonata cho piano số 31 cung La-giáng trưởng, Op. 110
F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 `,
                tac_pham_hoa_tau: "Tác phẩm\n hòa tấu",
                tac_pham_hoa_tau_noi_dung: `<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>
Bản Sonata cho hai piano cung Rê trưởng, K. 448
Bản Trio cho Piano, Violin và Cello cung Đô trưởng, K. 548
<strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>
Bản Sonata cho Cello và Piano số 1 cung Fa trưởng, Op. 5
Bản Sonata cho Violin và Piano số 4 cung La thứ, Op. 23
<strong style='color:#572219;font-size:22px'>F. Schubert (1797-1828)</strong>
Bản Fantasy cung Fa thứ cho piano bốn tay, D 940
<strong style='color:#572219;font-size:22px'>F. Mendelssohn (1809-1847)</strong>
Bản Trio cho Piano, Violin và Cello số 1 cung Rê thứ, Op. 49
Bản Trio cho Piano, Violin và Cello số 2 cung Đô thứ, Op. 66 
<strong style='color:#572219;font-size:22px'>R. Schumann (1810-1856)</strong>
Bản Sonata cho Violin và Piano số 1 cung La thứ, Op. 105
<strong style='color:#572219;font-size:22px'>F. Chopin (1810-1849)</strong>
Bản Sonata cho Cello và Piano cung Sol thứ, Op. 65
<strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>
Bản Trio cho Piano, Violin và Cello số 1 cung Si trưởng, Op. 8
<strong style='color:#572219;font-size:22px'>D. Shostakovich (1906-1975)</strong>
Bản Trio cho Piano, Violin và Cello số 1 cung Đô thứ, Op. 8
Bản Sonata cho Cello và Piano số 1 cung Rê thứ, Op. 40`,
ke_chuyen_cua_ban:" Kể chuyện của bạn",
chia_se_cau_chuyen_cua_ban: "Hãy chia sẻ câu chuyện của bạn!",
ke_chuyen_cua_ban_noi_dung:`Mỗi một chủ đề được kể trong các buổi diễn được bắt nguồn từ những câu chuyện và trải nghiệm chân thực trong cuộc sống mà Khánh Vân may mắn có dịp được lắng nghe và thấu hiểu. 

Do đó, để có thể mang đến nhiều chương trình độc tấu ý nghĩa và sâu sắc hơn nữa, Khánh Vân hi vọng sẽ được nghe thêm nhiều những lời chia sẻ chân thành và những nỗi tâm sự nơi đáy lòng của mọi người trong tương lai. 

Mọi người có thể gửi những tâm thư qua mail ạ. Khánh Vân xin cảm ơn sự đồng hành của các khán giả đã luôn đặt niềm tin và tiếp động lực cho mình trong hành trình âm nhạc này!`,
lien_he_voi_minh: "Liên hệ với mình nhé!"
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
                Ly_lich_ngan: "Artist Biography",
                Loi_tua: `"A concert", to me, is a harmonious blend of musical works based on a continuous storyline throughout a program. Through the years, the inspiration collected from the many facets of our daily life has given me the strive to convey these poignant life experiences to the audience in every soulful musical evening. My heartfelt desire and my greatest will as an artist ever since bringing this experience to life, is to offer solace to those grappling with desolation, to ignite hope in those facing despair, to empower those giving up on themselves, and to encourage those, whose noble aspirations will bring light to the future.`,

                Ly_lich: `The young Vietnamese pianist Hồ Khánh Vân is one of the most promising talents of her generation and in the Vietnamese classical music scene. Her distinctive, evocative playing, captivating musical expressions that keeps the audience spellbound, and her simple, sincere presentation style that conveys profound life messages in each concert had audiences around the world completely captivated until the very last minute.\n

Vân has established her reputation as an artist through awards at numerous national and international piano competitions in Europe. Her awards include First Prize at the London International Music Competition (2024), First Prize and the Nuovo-Imaie Prize at the Mauro Paolo Monopoli International Piano Competition in Italy (2023), and the Classical Sonata Prize at the Verona Piano Competition in Italy (2023). Previously, she won First Prize at the Hungarian National Piano Competition (2018), Second Prize at the Ile-de-France International Piano Competition in Paris (2018) and Third Prize at the Danubia-Talents International Music Competition in Vienna (2018). These successes have earned her concert engagements at major venues worldwide, including in Germany, France, Hungary, Austria, Italy, Portugal and Vietnam.\n

In recent years, Vân has performed at renowned international music festivals such as the Ravel Festival, Goslar Konzertarbeitswochen, International Mendelssohn Festival, International Summer Academy Mozarteum, and Mélomanes Côte Sud Association. She has performed as a soloist with the Kaliningrad Symphony Orchestra and the Soundiff Orchestra, under the baton of renowned conductors such as Mikhail Kirchhoff and Benedetto Montebello. On September 22nd in 2023, Hồ Khánh Vân released her successful debut album with Empirica Label while studying for her bachelor's degree, featuring piano works by the great Romantic composers of the 19th century: F. Chopin, F. Mendelssohn, R. Schumann, and F. Liszt. Vân has also been featured in news reports and interviews by NDR, barlettalive, and francetvinfo in Germany, Italy, and France.\n

Hồ Khánh Vân was born in 2002 to a into a non-musical family in Ho Chi Minh City, Vietnam, and began learning piano at the age of 8. During her five years at the Ho Chi Minh City Conservatory of Music, her mentors were Lê Kim Thanh and Trần Thu Lê, until she moved to Budapest, Hungary, where she studied for two years with Prof. György Nádor and Dr. Hargitai Imre. Since 2021, she has been pursuing her bachelor's degree with Prof. Stepan Simonyan at the Hamburg University of Music and Theater, and she will embark her master's studies in 2025 in the class of Prof. Hubert Rutkowski. As part of her musical education, Hồ Khánh Vân has participated in various masterclasses with renowned musicians and distinguished pedagogues such as Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Béroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, and Rena Shereshevskaya.`,
                ngay_4_thang_7_2025_20_30: "July 4th, 2025 - 20:30",
                ngay_2_tháng_1_2025_20_30: "January 2nd, 2025 - 20:30",
                ngay_2_tháng_1_2025_17_30: "January 2nd, 2025 - 17:30",
                place_bieu_dien_tot_nghiep:
                        "C. Bechstein Centrum, Chilehaus -- Hamburg, Germany",
                ngay_29_thang_12_2024_19_00: "December 29th, 2024 - 19:00",
                place_tro_ve: "Trung tam Van hoc Nghe thuat -- Ho Chi Minh City, Vietnam",
                tro_ve: "Piano Recital / The Return",
                place_mot_doi_nguoi: "John Robert Powers VN -- Ho Chi Minh City, Vietnam",
                place_ly_tuong_song: "John Robert Powers VN -- Ho Chi Minh City, Vietnam",
                tro_ve_desc:
                        "F. Mendelssohn (1809-1847): Songs without words No. 1 in E major, Op. 19\nW.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457\nF. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35\nL.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254  ",
                ngay_15_tháng_12_2024_19_30: "December 15th, 2024 - 19:30",
                place_cuoc_tim_kiem: "C. Bechstein VN -- Ho Chi Minh City, Vietnam",
                cuoc_tim_kiem: "Piano Recital / The Search",
                cuoc_tim_kiem_desc:
                        "D. Scarlatti (1685-1757): Keyboard Sonata in D minor, K. 213\nL.v. Beethoven (1770-1827): Piano Sonata No. 23 in F minor, Op. 57\nF. Schubert/F. Liszt: 'Der Müller und der Bach' from 'Die Schöne Müllerin', D 795 No. 2\nR. Schumann (1810-1856): Symphonic Etudes, Op. 13",
                ngay_14_tháng_12_2024_18_30: "December 14th, 2024 - 18:30",
                place_hanh_trinh_giac_mo:
                        "Steinway & Sons VN, Crescent Mall -- Ho Chi Minh City, Vietnam",
                hanh_trinh_giac_mo: "Piano Recital / Journey of Dreams",
                hanh_trinh_giac_mo_desc:
                        "D. Scarlatti (1685-1757): Keyboard Sonata in D minor, K. 1\nJ. Haydn (1732-1809): Piano Sonata No. 60 in C major, Hob/XVI: 50\nF. Chopin (1810-1849): Ballade No. 4 in F minor, Op. 52\nL.v. Beethoven (1770-1827): Piano Sonata No. 31 in A-flat major, Op. 110\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 ",
                ngay_7_tháng_7_2024_20_00: "July 7th, 2024 - 20:00",
                place_tac_pham_cho_piano_va_Cello: "Église Saint Nicolas -- Capbreton, France",
                tac_pham_cho_piano_va_Cello:
                        "Chamber Music Concert / Works for Piano and Cello",
                tac_pham_cho_piano_va_Cello_desc:
                        "Maria-Andrea Mendoza, Cello\n Hồ Khánh Vân, Piano\nJ.S. Bach (1685-1750): Cello Suite No. 1 in G major, BWV 1007\nL.v. Beethoven (1770-1827): Sonata for Cello and Piano No. 1 in F major, Op. 5\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254 \nD. Shostakovich (1906-1975): Trio for Piano, Violin and Cello No. 1 in C minor, Op. 8",
                ngay_4_tháng_5_2024_19_00: "May 4th, 2024 - 19:00",
                place_bieu_dien_hoc_vu: "Orchesterstudio, HfMT Hamburg -- Hamburg, Germany",
                bieu_dien_hoc_vu: "Piano Class Concert",
                bieu_dien_hoc_vu_desc:
                        "Class of Prof. Stepan Simonian\nF. Liszt (1811-1886): Après une lecture de Dante: Fantasia quasi Sonata",
                place: "C. Bechstein Centrum, ChilehausHamburg, Germany",
                bieu_dien_tot_nghiep: "Piano Recital / Bachelors Graduation ",
                mot_doi_nguoi: "Piano Recital / A Human's Life",
                ly_tuong_song: "Piano Recital / The Tenacity of Life",
                ly_tuong_song_desc:
                        "D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 213\nW.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457\nF. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35\nL.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a",
                bieu_dien_tot_nghiep_desc:
                        "Class of Prof. Stepan Simonian\nJ.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080\nW.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457\nF. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61\nM. Ravel (1875-1937): La Valse, M. 72",
                mot_doi_nguoi_desc:
                        "J.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080\nJ. Haydn (1732-1809): Piano Sonata No. 60 in C major, Hob/XVI: 50\nL.v. Beethoven (1770-1827): Piano Sonata No. 23 in F minor, Op. 57\nF. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61",
                tac_pham_giao_huong: "Orchestral Works",
                tac_pham_giao_huong_noi_dung:
                        "<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>\nPiano Concerto No. 17 in G major, K. 453\nPiano Concerto No. 20 in D minor, K. 466	\nPiano Concerto No. 21 in C major, K. 467	\nPiano Concerto No. 23 in A major, K. 488	\n<strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>\nPiano Concerto No. 3 in C minor, Op. 37\nPiano Concerto No. 4 in G major, Op. 58\n<strong style='color:#572219;font-size:22px'>F. Chopin (1810-1849)</strong>\nPiano Concerto No. 1 in E minor, Op. 11\n<strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>\nPiano Concerto No. 2 in B-flat major, Op. 83	",
                chuong_trinh_doc_tau: "Solo Programs",
                chuong_trinh_doc_tau_noi_dung: `
                <strong style='color:#572219;font-size:22px'>Program I: The Tenacity of Life</strong>
                D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 213
                W.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457
                F. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35
                L.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a
                <strong style='color:#572219;font-size:22px'>Program II: The Return </strong>
                F. Mendelssohn (1809-1847): Songs without words No. 1 in E major, Op. 19
                W.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457
                F. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35
                L.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a
                F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254
                <strong style='color:#572219;font-size:22px'>Program III: The Search</strong>
                D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 213
                L.v. Beethoven (1770-1827): Piano Sonata No. 23 in F minor, Op. 57
                F. Schubert/F. Liszt: 'Der Müller und der Bach' from 'Die Schöne Müllerin', D 795 No. 2
                R. Schumann (1810-1856): Symphonic Etudes, Op. 13
                <strong style='color:#572219;font-size:22px'>Program IV: The Inner Light</strong>
                J.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080
                W.A. Mozart (1756-1791): Piano Sonata No. 14 in C minor, K. 457
                F. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61
                M. Ravel (1875-1937): La Valse, M. 72
                <strong style='color:#572219;font-size:22px'>Program V: A Human's Life</strong>
                J.S. Bach (1685-1750): Contrapunctus I from 'The Art of Fugue', BWV 1080
                J. Haydn (1732-1809): Piano Sonata No. 60 in C major, Hob/XVI: 50
                L.v. Beethoven (1770-1827): Piano Sonata No. 23 in F minor, Op. 57
                F. Chopin (1810-1849): Polonaise-Fantasie in A-flat major, Op. 61
                <strong style='color:#572219;font-size:22px'>Program VI: The Reunion</strong>
                D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 213
                F. Chopin (1810-1849): Piano Sonata No. 2 in B-flat minor, Op. 35
                J.S. Bach/W. Kempff: Siciliano from Flute Sonata in E-flat major, BWV 1031
                L.v. Beethoven (1770-1827): Piano Sonata No. 26 in E-flat major, Op. 81a
                <strong style='color:#572219;font-size:22px'>Program VII: Journey of Dreams</strong>
                D. Scarlatti (1685-1757): Sonata for Keyboard in D minor, K. 1
                F. Chopin (1810-1849): Ballade No. 4 in F minor, Op. 52
                L.v. Beethoven (1770-1827): Piano Sonata No. 31 in A-flat major, Op. 110
                F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254
                `,
                tac_pham_hoa_tau: "Chamber Music",
                tac_pham_hoa_tau_noi_dung: `<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>
                Sonata for Two Pianos in D major, K. 448
                Piano Trio in C major, K. 548
                <strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>
                Sonata for Cello and Piano No. 1 in F major, Op. 5
                Sonata for Violin and Piano No. 4 in A minor, Op. 23
                <strong style='color:#572219;font-size:22px'>F. Schubert (1797-1828)</strong>
                Fantasy in F minor for Piano Four Hands, D 940
                <strong style='color:#572219;font-size:22px'>F. Mendelssohn (1809-1847)</strong>
                Piano Trio No. 1 in D minor, Op. 49
                Piano Trio No. 2 in C minor, Op. 66
                <strong style='color:#572219;font-size:22px'>R. Schumann (1810-1856)</strong>
                Sonata for Violin and Piano No. 1 in A minor, Op. 105
                <strong style='color:#572219;font-size:22px'>F. Chopin (1810-1849)</strong>
                Sonata for Cello and Piano in G minor, Op. 65
                <strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>
                Piano Trio No. 1 in B major, Op. 8
                <strong style='color:#572219;font-size:22px'>D. Shostakovich (1906-1975)</strong>
                Piano Trio No. 1 in C minor, Op. 8
                Sonata for Cello and Piano No. 1 in D minor, Op. 40`,
                ke_chuyen_cua_ban:" Tell your story",
                chia_se_cau_chuyen_cua_ban: "Voice your stories through music!",
                ke_chuyen_cua_ban_noi_dung:`Every story shared in these intimate piano recitals all started with those, whose real-life stories and experiences I had the precious opportunity to be told and was inspired to convey them into these deeply profound music programs.

Therefore, your life - your story can be as well shared with me via this contact mail . It is my greatest honor as an artist to be inspired by your life stories in order to continuously deliver meaningful messages through music!`,
                lien_he_voi_minh: "Let's stay in touch!"
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
                Ly_lich_ngan: "Künstlerbiografie",
                Ly_lich: `Die junge vietnamesische Pianistin Hồ Khánh Vân ist eine der vielversprechendsten Talente ihrer Generation und der vietnamesischen klassischen Musikszene. Ihre dimensional zauberhafte Klänge, fesselnden leidenschaftliche Musikausdrücke, mit ihrer schlichter, aufrichtiger und verständlichen Moderation der tiefgründige Lebensbotschaften bei jedem Konzert haben das Publikum weltweit bis zur letzten Minute völlig in ihren Bann gezogen.\n

Vân hat sich durch Auszeichnungen bei zahlreichen nationalen und internationalen Klavierwettbewerben in Europa einen Namen als Künstlerin gemacht. Zu ihren Auszeichnungen gehören der 1. Preis beim London Internationalen Musikwettbewerb (2024), 1. Preis und der Nuovo-Imaie-Preis beim Mauro Paolo Monopoli Internationalen Klavierwettbewerb in Italien (2023) und der Klassik-Sonaten-Preis beim Verona Klavierwettbewerb in Italien (2023). Zuvor erhielt sie den 1. Preis beim Ungarischen Nationalen Klavierwettbewerb (2018), den 2. Preis beim Ile-de-France Internationalen Klavierwettbewerb in Paris (2018) und den 3. Preis beim Danubia-Talents Internationalen Musikwettbewerb in Wien (2018). Diese Erfolge haben ihr Konzertauftritte an bedeutenden Veranstaltungsorten weltweit eingebracht, darunter in Deutschland, Frankreich, Ungarn, Österreich, Italien, Portugal und Vietnam. \n

In den letzten Jahren trat Vân bei renommierten internationalen Musikfestivals wie dem Ravel Festival, den Goslarer Konzertarbeitswochen, dem Internationalen Mendelssohn Festival, der Internationalen Sommerakademie Mozarteum und der Mélomanes Côte Sud Association auf. Sie war als Solistin mit dem Kaliningrader Symphonieorchester und dem Soundiff Orchestra unter der Leitung renommierter Dirigenten wie Mikhail Kirchhoff und Benedetto Montebello aufgetreten. Am 22. September 2023 veröffentlichte Hồ Khánh Vân während ihres Bachelorstudiums ihr erfolgreiches Debütalbum bei Empirica-Label mit Klavierwerken der großen romantischen Komponisten des 19. Jahrhunderts: F. Chopin, F. Mendelssohn, R. Schumann und F. Liszt. Vân wurde auch in Nachrichtenberichten und Interviews von NDR, barlettalive und francetvinfo in Deutschland, Italien und Frankreich vorgestellt.\n

Hồ Khánh Vân wurde in 2002 von einer nicht-musikalischen Familie in Ho-Chi-Minh-Stadt, Vietnam, geboren und begann ihre Klavierausbildung im Alter von 8 Jahren. Während 5 Jahren im Ho-Chi-Minh-Musikkonservatorium waren ihre Mentoren Le Kim Thanh und Tran Thu Le, bis sie nach Budapest, Ungarn zog, wo sie 2 Jahre lang bei Prof. György Nádor und Dr. Hargitai Imre studierte. Seit 2021 setzt sie ihr Bachelorstudium bei Prof. Stepan Simonyan an der Hochschule für Musik und Theater Hamburg fort und derzeit wird ihr Masterstudium in 2025 in der Klasse von Prof. Hubert Rutkowski anfangen. Im Rahmen ihrer musikalischen Ausbildung hat Hồ Khánh Vân an verschiedenen Meisterkursen mit berühmten Musikern wie Arie Vardi, Dmitri Alexeev, Robert Levin, Michel Béroff, Grigory Gruzman, Cyprien Katsaris, Pavel Gililov, Philippe Giusiano, Rena Shereshevskaya teilgenommen.`,
                ngay_4_thang_7_2025_20_30: "4. Juli 2025 - 20:30",
                ngay_2_tháng_1_2025_20_30: "2. Januar 2025 - 20:30",
                ngay_2_tháng_1_2025_17_30: "2. Januar 2025 - 17:30",
                place_mot_doi_nguoi: "John Robert Powers VN -- Ho Chi Minh Stadt, Vietnam",
                place_bieu_dien_tot_nghiep:
                        "C. Bechstein Centrum, Chilehaus -- Hamburg, Deutschland",
                ngay_29_thang_12_2024_19_00:
                        "29. Dezember 2024 - 19:00",
                place_tro_ve: "Trung tam Van hoc Nghe thuat -- Ho Chi Minh Stadt, Vietnam",
                tro_ve: "Klavierabend / Wiederkehr",
                tro_ve_desc:
                        "F. Mendelssohn (1809-1847): Lieder ohne Worte Nr. 1 in E-Dur, op. 19\nW.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457\nF. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254",
                ngay_15_tháng_12_2024_19_30: "15. Dezember 2024 - 19:30",
                place_cuoc_tim_kiem: "C Bechstein VN -- Ho Chi Minh Stadt, Vietnam",
                cuoc_tim_kiem: "Klavierabend / Die Suche",
                cuoc_tim_kiem_desc:
                        "D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 23 in f-Moll, op. 57\nF. Schubert/F. Liszt: 'Der Müller und der Bach' aus 'Die Schöne Müllerin', D 795 Nr. 2\nR. Schumann (1810-1856): Symphonische Etüden, op. 13",
                ngay_14_tháng_12_2024_18_30: "14. Dezember 2024 - 18:30",
                place_hanh_trinh_giac_mo:
                        "Steinway & Sons VN, Crescent Mall -- Ho Chi Minh Stadt, Vietnam",
                hanh_trinh_giac_mo: "Klavierabend / Traumreise",
                hanh_trinh_giac_mo_desc:
                        "D. Scarlatti (1685-1757): Sonate in d-Moll, K. 1\nJ. Haydn (1732-1809): Klaviersonate Nr. 60 in C-Dur, Hob/XVI: 50\nF. Chopin (1810-1849): Ballade Nr. 4 in f-Moll, op. 52\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 31 in As-Dur, op. 110\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254",
                ngay_7_tháng_7_2024_20_00: "7. Juli 2024 - 20:00",
                place_tac_pham_cho_piano_va_Cello:
                        "Église Saint Nicolas -- Capbreton, Frankreich",
                tac_pham_cho_piano_va_Cello:
                        "Kammermusikkonzert / Werke für Klavier und Cello",
                tac_pham_cho_piano_va_Cello_desc:
                        "Maria-Andrea Mendoza, Cello \n Hồ Khánh Vân, Klavier\nJ.S. Bach (1685-1750): Suite für Cello Nr. 1 in G-Dur, BWV 10007\nL.v. Beethoven (1770-1827): Sonate für Cello und Klavier Nr. 1 in F-Dur, op. 5\nF. Liszt (1811-1886): Rhapsodie Espagnole, S. 254\nD. Shostakovich (1906-1975): Trio für Klavier, Violine und Cello Nr. 1 in c-Moll, op. 8",
                ngay_4_tháng_5_2024_19_00: "4. Mai 2024 - 19:00",
                place_bieu_dien_hoc_vu: "Orchesterstudio, HfMT Hamburg -- Hamburg, Deutschland",
                bieu_dien_hoc_vu: "Studiokonzert Klavier",
                bieu_dien_hoc_vu_desc:
                        "Klasse Prof. Stepan Simonian\nF. Liszt (1811-1886): Après une lecture de Dante: Fantasia quasi Sonata",
                place: "C. Bechstein Centrum, ChilehausHamburg, Deutschland",
                bieu_dien_tot_nghiep: " Klavierabend / Bachelorprüfung",
                mot_doi_nguoi: "Klavierabend / Ein Menschenleben",
                ly_tuong_song: "Klavierabend / Lebenswille",
                place_ly_tuong_song: "John Robert Powers VN -- Ho Chi Minh Stadt, Vietnam",
                ly_tuong_song_desc:
                        "D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213\nW.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457\nF. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a",
                bieu_dien_tot_nghiep_desc:
                        "Klasse Prof. Stepan Simonian\nJ.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080\nW.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457\nF. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61 \nM. Ravel (1875-1937): La Valse, M. 72",
                mot_doi_nguoi_desc:
                        "J.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080\nJ. Haydn (1732-1809): Klaviersonate Nr. 60 in C-Dur, Hob/XVI: 50\nL.v. Beethoven (1770-1827): Klaviersonate Nr. 23 in f-Moll, op. 57\nF. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61 ",
                tac_pham_giao_huong: "Orchesterwerke",
                tac_pham_giao_huong_noi_dung:
                        "<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>\nKlavierkonzert Nr. 17 in G-Dur, K. 453\nKlavierkonzert Nr. 20 in d-Moll, K. 466	\nKlavierkonzert Nr. 21 in C-Dur, K. 467	\nKlavierkonzert Nr. 23 in A-Dur, K. 488	\n<strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>\nKlavierkonzert Nr. 3 in c-Moll, op. 37\nKlavierkonzert Nr. 4 in G-Dur, op. 58\n<strong style='color:#572219;font-size:22px'>F. Chopin (1810-1849)</strong>\nKlavierkonzert Nr. 1 in e-Moll, op. 11\n<strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>\nKlavierkonzert Nr. 2 in B-Dur, op. 83	",
                chuong_trinh_doc_tau: "Soloprogramme",
                chuong_trinh_doc_tau_noi_dung: `
                <strong style='color:#572219;font-size:22px'>Programm I: Lebenswille</strong>
                D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213
                W.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457
                F. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a
                <strong style='color:#572219;font-size:22px'>Programm II: Wiederkehr</strong>
                F. Mendelssohn (1809-1847): Lieder ohne Worte Nr. 1 in E-Dur, op. 19
                W.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457
                F. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a
                F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254
                <strong style='color:#572219;font-size:22px'>Programm III: Die Suche</strong>
                D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 23 in f-Moll, op. 57
                F. Schubert/F. Liszt: 'Der Müller und der Bach' aus 'Die Schöne Müllerin', D 795 Nr. 2
                R. Schumann (1810-1856): Symphonische Etüden, op. 13
                <strong style='color:#572219;font-size:22px'>Programm IV: Das innere Licht</strong>
                J.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080
                W.A. Mozart (1756-1791): Klaviersonate Nr. 14 in c-Moll, K. 457
                F. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61
                M. Ravel (1875-1937): La Valse, M. 72
                <strong style='color:#572219;font-size:22px'>Programm V: Ein Menschenleben</strong>
                J.S. Bach (1685-1750): Kontrapunktus I aus 'Die Kunst der Fuge', BWV 1080
                J. Haydn (1732-1809): Klaviersonate Nr. 60 in C-Dur, Hob/XVI: 50
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 23 in f-Moll, op. 57
                F. Chopin (1810-1849): Polonaise-Fantasie in As-Dur, op. 61
                <strong style='color:#572219;font-size:22px'>Programm VI: Die Wiedervereinigung</strong>
                D. Scarlatti (1685-1757): Sonate in d-Moll, K. 213
                F. Chopin (1810-1849): Klaviersonate Nr. 2 in b-Moll, op. 35
                J.S. Bach/W. Kempff: Siciliano aus der Flötensonate in Es-Dur, BWV 1031
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 26 in Es-Dur, op. 81a
                <strong style='color:#572219;font-size:22px'>Programm VII: Traumreise</strong>
                D. Scarlatti (1685-1757): Sonate in d-Moll, K. 1
                F. Chopin (1810-1849): Ballade Nr. 4 in f-Moll, op. 52
                L.v. Beethoven (1770-1827): Klaviersonate Nr. 31 in As-Dur, op. 110
                F. Liszt (1811-1886): Rhapsodie Espagnole, S. 254
                `,
                tac_pham_hoa_tau: "Kammermusik",
                tac_pham_hoa_tau_noi_dung: `<strong style='color:#572219;font-size:22px'>W.A. Mozart (1756-1791)</strong>
                Sonate für zwei Klaviere in D-Dur, K. 448
                Klaviertrio in C-Dur, K. 548
                <strong style='color:#572219;font-size:22px'>L.v. Beethoven (1770-1827)</strong>
                Sonate für Cello und Klavier Nr. 1 in F-Dur, op. 5
                Sonate für Violine und Klavier Nr. 4 in a-Moll, op. 23
                <strong style='color:#572219;font-size:22px'>F. Schubert (1797-1828)</strong>
                Fantasie in f-Moll für Klavier zu vier Händen, D 940
                <strong style='color:#572219;font-size:22px'>F. Mendelssohn (1809-1847)</strong>
                Klaviertrio Nr. 1 in d-Moll, op. 49
                Klaviertrio Nr. 2 in c-Moll, op. 66
                <strong style='color:#572219;font-size:22px'>R. Schumann (1810-1856)</strong>
                Sonate für Violine und Klavier Nr. 1 in a-Moll, op. 105
                <strong style='color:#572219;font-size:22px'>F. Chopin (1810-1849)</strong>
                Sonate für Cello und Klavier in g-Moll, op. 65
                <strong style='color:#572219;font-size:22px'>J. Brahms (1833-1897)</strong>
                Klaviertrio Nr. 1 in H-Dur, op. 8
                <strong style='color:#572219;font-size:22px'>D. Shostakovich (1906-1975)</strong>
                Klaviertrio Nr. 1 in c-Moll, op. 8
                Sonate für Cello und Klavier Nr. 1 in d-Moll, op. 40`,
                ke_chuyen_cua_ban:" Erzähle deine Geschichte",
                chia_se_cau_chuyen_cua_ban: "Erzähle Ihre Geschichte!",
                ke_chuyen_cua_ban_noi_dung:`
Jede Geschichte, die in diesen intimen Klavierabenden erzählt wird, begann mit Menschen, deren reale Lebensgeschichten und Erfahrungen mir erzählt wurden und die mich dazu inspirierten, sie in diese tiefgründigen Musikprogramme zu integrieren.

Nun, können Sie mir auch Ihre Geschichte, Gefühle, Gedanken vom Leben über diese Kontakt-E-Mail-Adresse teilen. Es ist mir als Künstlerin eine große Ehre, mich von Ihnen inspirieren zu lassen, um weiterhin bedeutungsvolle Botschaften durch Musik zu vermitteln!`,
                lien_he_voi_minh: "Bleiben wir in Kontakt!",
        },
};

const i18n = createI18n({
        legacy: false, // dùng Composition API
        locale: "vi", // ngôn ngữ mặc định
        fallbackLocale: "en",
        messages,
});

export default i18n;
