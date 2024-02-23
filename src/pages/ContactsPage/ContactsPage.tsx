import React from 'react';
import { ContactsContainer, Container, CoordIcon, GroomIcon, OrgIcon, Title } from './styled';
import { Contact } from '../../components/Contact';

export const ContactsPage = () => {
  return (
    <Container>
      <Title>Контакты</Title>
      <ContactsContainer>
        <Contact
          img={<CoordIcon />}
          name="Оксана"
          job="Координатор"
          description="Поможет с любыми вопросами в день свадьбы"
          tgLabel="@Oks665"
          tgLink="https://t.me/Oks665"
          phone="+7 911 960-15-77"
          phoneLink="tel:+79119601577"
        />
        <Contact
          img={<OrgIcon />}
          name="Ольга Никулина"
          job="Организатор свадьбы"
          description="Следит за тем, чтобы все были довольными"
          tgLabel="@Olga_nikulina_spb"
          tgLink="https://t.me/Olga_nikulina_spb"
          phone="+7 901 906-68-80"
          phoneLink="tel:+79019066880"
        />
        <Contact
          img={<GroomIcon />}
          name="Дмитрий"
          job="Жених"
          description="Будущий муж. Очень волнуется"
          tgLabel="@DmitriyKlemeshov"
          tgLink="https://t.me/DmitriyKlemeshov "
          phone="+7 982 300-70-74"
          phoneLink="tel:+79823007074"
        />
      </ContactsContainer>
    </Container>
  );
};
