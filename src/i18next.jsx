import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
                    Home: 'Главная',
                    Tours: 'Туры',
                    Organizations: 'Организации',
                    Search: 'Поиск',
                    lagout: 'Выйти',
                    see: 'Смотреть',
                    login: 'Войти',
                    register: 'Регистрация',


                    HomeH5title: 'Бронируйте свой тур прямо сейчас!',
                    HomeH1title: 'Туры по горним ущельям с 20% скидкой только на этих выходных',
                    HomeDesc: ' Не упустите возможность окунуться в атмосферу приключений по самым выгодным ценам! Бронируйте свой тур прямо сейчас!',

                    welcome: 'Добро пожаловать',
                    continueWG: 'Продолжить с Google или введите данные для входа',
                    Forgotpassword: 'Забыли пароль',
                    notReg: 'Вы еще не зарегистрировались?',
                    createAcc: 'Создать аккаунт',
                    or: 'или',
                    user: 'Пользователь',
                    Company: 'Компания',
                    select: 'Выберите свой регион',
                    regUser: 'Давайте заполним немножко форм и пойдем искать туры для себя',
                    lets: 'Давайте заполним немножко форм и пойдем искать туры для себя'
                }
            },
            en: {
                translation: {
                    Home: 'Home',
                    Tours: 'Tours',
                    Organizations: 'Organizations',
                    Search: 'Search',
                    lagout: 'Logout',
                    see: 'See',
                    login: 'Login',
                    register: 'Registration',

                    HomeH5title: 'Book your tour now!',
                    HomeH1title: 'Tours through mountain gorges with a 20% discount only this weekend',
                    HomeDesc: "Don't miss the chance to immerse yourself in the atmosphere of adventure at the best prices! Book your tour now!",

                    welcome: 'Welcome',
                    continueWG: 'Continue with Google or enter your login details',
                    Forgotpassword: 'Forgot password',
                    notReg: 'Not registered yet?',
                    createAcc: 'Create an account',
                    or: 'or',
                    user: 'User',
                    Company: 'Company',
                    select: 'Select your region',
                    regUser: "Let's fill out a few forms and go look for tours for ourselves",
                    lets: "Let's fill out a few forms and go look for tours for ourselves"
                }
            },
            kg: {
                translation: {
                    Home: 'Башкы бет',
                    Tours: 'Турлар',
                    Organizations: 'Уюмдар',
                    Search: 'Издөө',
                    lagout: 'Чыгуу',
                    see: "Көрүү",
                    login: 'Кирүү',
                    register: 'Каттоо',


                    HomeH5title: 'Турду азыр брондоп алыңыз!',
                    HomeH1title: 'Бул дем алыш күндөрү 20% арзандатуу менен тоо капчыгайларына саякаттар',
                    HomeDesc: 'Жогорку баадагы укмуштуудай саякаттарга чыгуу мүмкүнчүлүгүн колдон чыгарбаңыз! Турду азыр брондоп алыңыз!',

                    welcome: 'Кош келиңиз',
                    continueWG: 'Google менен улантыңыз же кирүү маалыматтарыңызды киргизиңиз',
                    Forgotpassword: 'Сыр сөздү унуттуңузбу',

                    notReg: 'Бүрөткө катталган жоксузбу?',
                    createAcc: 'Аккаунт түзүңүз',
                    or: 'же',
                    user: 'Колдонуучу',
                    Company: 'Компания',
                    select: 'Аймагыңызды тандаңыз',
                    regUser: 'Келгиле, бир нече формаларды толтуруп, өзүбүз үчүн турларды издейли',
                    lets: 'Келгиле, бир нече формаларды толтуруп, өзүбүз үчүн турларды издейли'
                }
            },
            uz: {
                translation: {
                    Home: 'Bosh sahifa',
                    Tours: 'Sayohatlar',
                    Organizations: 'Tashkilotlar',
                    Search: 'Qidiruv',
                    lagout: 'Chiqish',
                    see: "Ko'rinsh",
                    login: 'Kirish',
                    register: "Ro'yxatdan o'tish",

                    HomeH5title: 'Turingizni hoziroq buyurtma qiling!',
                    HomeH1title: 'Faqat shu dam olish kunlari tog‘ daralariga 20% chegirma bilan turlar',
                    HomeDesc: 'Eng yaxshi narxlarda sarguzashtlar atmosferasiga sho‘ng‘ish imkoniyatini qo‘ldan boy bermang! Turingizni hoziroq buyurtma qiling!',

                    welcome: 'Xush kelibsiz',
                    continueWG: "Google bilan davom eting yoki kirish ma'lumotlaringizni kiriting",

                    Forgotpassword: 'Parolni unutdingizmi',
                    notReg: "Hali ro'yxatdan o'tmaganmisiz?",

                    createAcc: 'Hisob yarating',
                    or: 'yoki',
                    user: 'Foydalanuvchi',
                    Company: 'Компания',
                    select: 'Mintaqangizni tanlang',
                    regUser: "Keling, bir nechta shakllarni to'ldiramiz va o'zimiz uchun sayohatlarni qidiramiz",
                    lets: "Keling, bir nechta shakllarni to'ldiramiz va o'zimiz uchun sayohatlarni qidiramiz"
                }
            }
        },
        lng: 'kg',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
