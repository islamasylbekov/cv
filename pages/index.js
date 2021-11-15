import Head from "next/head";
import styles from "../styles/index.module.scss";
import skils from "./skils.json";
import {
  Avatar,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExtensionIcon from "@material-ui/icons/Extension";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import GitHubIcon from "@material-ui/icons/GitHub";
import WorkIcon from "@material-ui/icons/Work";

export default function Home() {
  let skilList = skils.map((x, index) => {
    return (
      <Chip
        key={index}
        className={styles.chip}
        variant={"outlined"}
        label={x.text}
        avatar={<Avatar alt="Natacha" src={x.icon} />}
        size={"medium"}
      />
    );
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>cv</title>
      </Head>
      <CssBaseline />
      <div>
        <Container className={styles.container} maxWidth="lg">
          <Paper className={styles.paper} elevation={4}>
            <div className={styles.header}>
              <div>
                <Typography className={styles.title} variant={"h3"}>
                  Тойчубек уулу Исламбек
                </Typography>
                <Typography className={styles.subTitle} variant={"h6"}>
                  Java full-stack developer
                </Typography>
              </div>

              <div className={styles.text}>
                <Typography component={"span"} variant={"subtitle2"}>
                  Занятость:{" "}
                </Typography>
                <Typography component={"span"} variant={"body2"}>
                  полная занятость
                </Typography>
                <br />
                <Typography component={"span"} variant={"subtitle2"}>
                  График работы:{" "}
                </Typography>
                <Typography component={"span"} variant={"body2"}>
                  гибкий график, полный день
                </Typography>
              </div>
            </div>
            <Divider />
            <Grid className={styles.gridContainer} container>
              <Grid item xs={4}>
                <div className={styles.contacts}>
                  <Typography className={styles.subTitle} variant={"h6"}>
                    <ContactsIcon />
                    <span>Контакты</span>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link
                      className={styles.link}
                      href="tel:+996779683524"
                      underline={"none"}
                    >
                      <PhoneIphoneIcon className={styles.linkIcon} /> +996 (779)
                      68-35-24
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link
                      className={styles.link}
                      href="mailto:islamasylbekov36@gmail.com"
                      underline={"none"}
                    >
                      <EmailIcon className={styles.linkIcon} />{" "}
                      islamasylbekov36@gmail.com
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link
                      className={styles.link}
                      href="https://telegram.me/islam2727"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline={"none"}
                    >
                      <TelegramIcon className={styles.linkIcon} /> @islam2727
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link
                      className={styles.link}
                      href="https://github.com/islamasylbekov"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline={"none"}
                    >
                      <GitHubIcon className={styles.linkIcon} />{" "}
                      github.com/islamasylbekov
                    </Link>
                  </Typography>
                </div>
                <Typography className={styles.subTitle} variant={"h6"}>
                  <PersonIcon />
                  <span>Обо мне</span>
                </Typography>
                <Typography>
                  Начинающий веб-разработчик, хочу развиваться в направлении
                  back-end. Front-end разработкой занимаюсь уже почти год,
                  начинал с обучения верстке сайтов из PSD-макетов. Последние
                  4-5 месяцев занимаюсь активным изучением разработки
                  веб-приложений на React.
                </Typography>
              </Grid>
              <Grid className={styles.dividerContainer} item xs={1}>
                <Divider orientation={"vertical"} />
              </Grid>
              <Grid item xs={7}>
                <Typography className={styles.subTitle} variant={"h6"}>
                  <ExtensionIcon />
                  <span>Ключевые навыки</span>
                </Typography>
                <div className={styles.chipContainer}>{skilList}</div>

                <Typography className={styles.subTitle} variant={"h6"}>
                  <WorkIcon />
                  <span>Опыт работы</span>
                </Typography>
                <Grid className={styles.edu} container>
                  <Grid item xs={3}>
                    <Typography variant={"body1"}>
                      Август 2020 &#8213; По наст. время
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant={"body1"}>
                      Государственное учреждение &quot;Укук&quot; при Генералъной
                      прокуратуре Кыргызской Республики.
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={styles.subTitle} variant={"h6"}>
                  <SchoolIcon />
                  <span>Образование</span>
                </Typography>
                <Grid className={styles.edu} container>
                  <Grid item xs={3}>
                    <Typography variant={"body1"}>2018 &#8213; 2022</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant={"body1"}>
                      Высшее незаконченное (бакалавр), КГУСТА им.Н.Исанова,
                      Факультет Информационных Технологий, кафедра ПМ,
                      специальность «Программная инженерия».
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
}
