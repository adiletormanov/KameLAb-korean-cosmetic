import React from 'react';

import data from './FaqData/FaqData';
import FaqQuestion from './FaqQusetion/FaqQuestion';

const Faq = () => {
  const [questions, setQuestions] = React.useState(data);

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="faq">
        <div className="faq__container">
          <div className='faq__border'>
            <h2 className="faq__title">Популярные вопросы</h2>

            <div className="faq__block">
              {questions.map((question) => {
                return <FaqQuestion key={question} {...question} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
