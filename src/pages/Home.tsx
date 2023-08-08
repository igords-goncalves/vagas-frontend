import { useState, useEffect, useContext } from 'react';
import googlePlayBadge from '../assets/imgs/googlePlayBadge.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import { useApi } from '../hooks/useApi';

import {
    Title,
    Main,
    JobsInfo,
    MainSearchFilter,
    Image,
    OurSitesSection,
    CardWrapper,
    JourneySection,
    JourneyTitle,
    JourneyCardWrapper,
    AreasSection,
    AreasCardWrapper,
    CustomNextButton,
    CustomPrevButton,
    VocationalBannerArea,
    VocationalBannerContainer,
    VocationalImage,
    VocationalTextContainer,
    TestimonialSection,
    TestimonialWrapper,
    AppBannerContainer,
    AppBannerContainerInfo,
    BannerMobileImage,
    GooglePlayButton,
    CircleImage,
    JourneyContainer,
    Circle,
    MainContent,
    SecondaryTitle,
    Subtitle,
} from './styles/Home.styles';

import OurSitesCard from '../components/Home/OurSitesSection/OurSites';
import JourneyCard from '../components/Home/JourneySection/JourneyCard';

import ImageHome from '../assets/imgs/home-image.svg';
import PortalMentoria from '../assets/imgs/portalMentoria-img.svg';
import Site from '../assets/imgs/siteSouJunior-img.svg';
import NosAcompanhe from '../assets/imgs/followUs-img.svg';
import Linkedin from '../assets/imgs/linkedin-rectangle.png';
import Resume from '../assets/imgs/resume-rectangle.png';
import Process from '../assets/imgs/process-rectangle.png';
import KeyWords from '../assets/imgs/keyWords-rectangle.png';
import TechnologyAreaCard from '../components/Home/TechnologyArea/TechnologyAreaCard';
import VocationalTest from '../assets/imgs/vocational-teste.svg';
import BannerMobile from '../assets/imgs/BannerMobile.svg';
import doubleCircles from '../assets/imgs/DoubleCircle.svg';
import circle from '../assets/imgs/circle.svg';

import ProfileTest from '../assets/imgs/profile-depoimento.png';
import { Areas } from '../Mocks/MockArea';
import Testimonials from '../components/Home/Testimonials';
import HomeHeader from '../components/Home/HomeHeader';
import JobFilter from '../components/Home/HomeJobFilter/HomeJobFilter';
import { Footer } from '../components/Footer';
import Header from '../components/Portal/Header';
import { AuthContext } from '../contexts/Auth/AuthContext';

interface AreaProps {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export const Home: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [jobsCount, setJobsCount] = useState<number>();
    const [isMobile, setIsMobile] = useState(false);

    const api = useApi();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1250);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        async function getJobs() {
            const jobsData = await api.getJobs();
            if (jobsData.meta) {
                const jobsCount = jobsData.meta.itemCount;
                const roundedCount = Math.floor(jobsCount / 10) * 10;
                setJobsCount(roundedCount);
            }
        }
        getJobs();

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            scrollTop > 300 ? setIsActive(true) : setIsActive(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const breakpoints = {
        350: {
            slidesPerView: 3,
        },
        515: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
        1440: {
            slidesPerView: 9,
        },
    };

    return (
        <>
            {user ? (
                <div className="z-[2000] fixed w-full">
                    <Header />
                </div>
            ) : (
                <HomeHeader isActive={isActive} />
            )}
            <Main>
                <MainContent>
                    <MainSearchFilter>
                        <Title>
                            Um portal de vagas <span>exclusivo</span> para o
                            profissional <span>Júnior!</span>
                        </Title>
                        <JobFilter />

                        <JobsInfo>
                            Mais de {jobsCount} vagas disponíveis para Juninhos{' '}
                        </JobsInfo>
                    </MainSearchFilter>
                    <Image src={ImageHome}></Image>
                </MainContent>
                <Circle src={circle} />
                <CircleImage src={doubleCircles} />
            </Main>
            <AreasSection>
                <SecondaryTitle>Já sabe por onde começar? </SecondaryTitle>
                <Subtitle>
                    Conheça um pouco mais das áreas de Tecnologia
                </Subtitle>
                <AreasCardWrapper>
                    <Swiper
                        modules={[Navigation]}
                        breakpoints={breakpoints}
                        navigation={{
                            nextEl: '.swiper-next-button',
                            prevEl: '.swiper-prev-button',
                        }}
                        className="mySwiper"
                        style={{
                            width: '100%',
                            maxWidth: 'screen-width',
                            paddingLeft: isMobile ? '0px' : '75px',
                            paddingRight: '40px',
                        }}
                    >
                        {!isMobile && (
                            <CustomPrevButton className="swiper-prev-button">
                                <CaretLeft size={42} />
                            </CustomPrevButton>
                        )}

                        {Areas.map((area: AreaProps) => (
                            <SwiperSlide
                                key={area.name}
                                className="swiper-slide-responsive"
                            >
                                <div>
                                    <TechnologyAreaCard
                                        icon={area.icon}
                                        area={area.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {!isMobile && (
                            <CustomNextButton className="swiper-next-button">
                                <CaretRight size={42} />
                            </CustomNextButton>
                        )}
                    </Swiper>
                </AreasCardWrapper>
            </AreasSection>
            <VocationalBannerArea>
                <VocationalBannerContainer>
                    <VocationalTextContainer>
                        <h1>
                            TESTE <br />
                            <span>VOCACIONAL</span>
                        </h1>
                        <p>
                            <a
                                href="https://especiais.g1.globo.com/educacao/guia-de-carreiras/teste-vocacional/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Clique Aqui
                            </a>{' '}
                            e faça o seu teste agora mesmo!
                        </p>
                        <p className="p2">Seu teste será feito no g1.com</p>
                    </VocationalTextContainer>
                    <VocationalImage src={VocationalTest} alt="" />
                </VocationalBannerContainer>
            </VocationalBannerArea>
            <OurSitesSection>
                <SecondaryTitle>
                    Seja o Júnior que as empresas desejam:
                </SecondaryTitle>
                <CardWrapper>
                    <OurSitesCard
                        Link="http://mentores.soujunior.tech/"
                        Title="Portal de Mentoria"
                        Img={PortalMentoria}
                        Description="Seja mentorado por um profissional experiente."
                    />
                    <OurSitesCard
                        Link="https://www.soujunior.tech/"
                        Title="Site SouJunior"
                        Img={Site}
                        Description="Conheça todas as iniciativas da SouJunior"
                    />
                    <OurSitesCard
                        Link="https://www.youtube.com/@soujuniortech"
                        Title="Nos Acompanhe"
                        Img={NosAcompanhe}
                        Description="Conheça todas as nossas redes e portais de comunicação"
                    />
                </CardWrapper>
            </OurSitesSection>
            <JourneySection>
                <JourneyContainer>
                    <JourneyTitle>Vamos juntos nessa jornada</JourneyTitle>
                    <JourneyCardWrapper>
                        <JourneyCard
                            Img={Linkedin}
                            Description={'Se destaque no Linkedin'}
                        />
                        <JourneyCard
                            Img={Resume}
                            Description={'Como construir um currículo Júnior'}
                        />
                        <JourneyCard
                            Img={Process}
                            Description={'Se prepare para o processo seletivo'}
                        />
                        <JourneyCard
                            Img={KeyWords}
                            Description={'Palavras Chave na área tech'}
                        />
                    </JourneyCardWrapper>
                </JourneyContainer>
            </JourneySection>

            <AppBannerContainer>
                <AppBannerContainerInfo>
                    <h1>
                        Baixe nosso aplicativo
                        <br />
                        no seu dispositivo <span>Android</span>
                        <br />
                        e fique por dentro das <br />
                        novidades!
                    </h1>
                    <a
                        href="https://play.google.com/store/apps?hl=pt_BR&gl=US"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GooglePlayButton src={googlePlayBadge} />
                    </a>
                </AppBannerContainerInfo>
                <BannerMobileImage src={BannerMobile} />
                <CircleImage src={doubleCircles} />
            </AppBannerContainer>

            <TestimonialSection>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    centeredSlides={true}
                    spaceBetween={100}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                    }}
                    style={{
                        width: '95%',
                        maxWidth: '1080px',
                        height: 'auto',
                        margin: '0 auto',
                        padding: '80px 0',
                    }}
                    className="mySwiper"
                >
                    <TestimonialWrapper>
                        {/* Darei uma map aqui quando tiver os depoimentos disponiveis, 
                        deixei informações estáticas somente para demonstrações */}
                        <SwiperSlide>
                            <Testimonials
                                Text={
                                    '“A SouJunior foi uma adição muito necessária na minha carreira profissional, eu ainda estava no começo da minha jornada como Designer e tive a oportunidade de integrar otime e me desenvolver muito, aprendi como funcionava arotina, os métodos, as aplicações, por isso sou muito grato e recomendo o projeto!”'
                                }
                                Author={'Lucas Sales'}
                                Workplace={'UX Designer na Ilegra'}
                                Profile={ProfileTest}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Testimonials
                                Text={
                                    '“A SouJunior foi uma adição muito necessária na minha carreira profissional, eu ainda estava no começo da minha jornada como Designer e tive a oportunidade de integrar otime e me desenvolver muito, aprendi como funcionava arotina, os métodos, as aplicações, por isso sou muito grato e recomendo o projeto!”'
                                }
                                Author={'Lucas Sales'}
                                Workplace={'UX Designer na Ilegra'}
                                Profile={ProfileTest}
                            />
                        </SwiperSlide>{' '}
                        <SwiperSlide>
                            <Testimonials
                                Text={
                                    '“A SouJunior foi uma adição muito necessária na minha carreira profissional, eu ainda estava no começo da minha jornada como Designer e tive a oportunidade de integrar otime e me desenvolver muito, aprendi como funcionava arotina, os métodos, as aplicações, por isso sou muito grato e recomendo o projeto!”'
                                }
                                Author={'Lucas Sales'}
                                Workplace={'UX Designer na Ilegra'}
                                Profile={ProfileTest}
                            />
                        </SwiperSlide>
                    </TestimonialWrapper>
                </Swiper>
            </TestimonialSection>
            <Footer />
        </>
    );
};
