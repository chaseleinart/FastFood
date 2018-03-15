/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Order from './Order';

const title = 'Order Food';

function action() {
  return {
    chunks: ['order'],
    title,
    component: (
      <Layout>
        <Order title={title} />
      </Layout>
    ),
  };
}

export default action;
