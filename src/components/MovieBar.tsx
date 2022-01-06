import React from 'react';
import { calcTime, convertMoney } from '../helpers';
import { Wrapper, Content } from './MovieBarStyles';

type Props = {
  time: number;
  budget: number;
  revenue: number;
};

const MovieBar: React.FC<Props> = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Budget: {budget > 0 ? convertMoney(budget) : 'n/a'}</p>
      </div>
      <div className='column'>
        <p>Revenue: {revenue > 0 ? convertMoney(revenue) : 'n/a'}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieBar;
