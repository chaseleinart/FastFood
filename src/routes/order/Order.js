/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Iframe from 'react-iframe';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Order.css';
import { Input, TextArea, FormBtn } from "../../components/Form";


class Order extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
        </div>

        <Iframe
          url="https://delivery.panerabread.com/"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />

        <div className={s.sendOrderDetails}>
          <h1>Send us your order details!</h1>
          <br/>
          <form>
            <Input name="customerName" placeholder="Your full name" />
            <Input name="orderLocation" placeholder="Your Order Location" />
            <TextArea name="orderDetails" placeholder="Details of your order" />
            <FormBtn>Send Order</FormBtn>
          </form>
        </div>

        {/* https://delivery.panerabread.com/ */}
        {/* https://order.chipotle.com/    this doesn't work in iframe */}
        {/* https://order.subway.com       this doesn't work in iframe */}
      </div>
    );
  }
}

export default withStyles(s)(Order);
