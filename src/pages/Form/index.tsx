import * as React from 'react';

import MainLayout from '../../components/Layout';
import DefaultForm from './DefaultForm';
import Inputs from './Inputs';

import {Row, Col, Card } from 'antd';

const FormDemo = () => {
  return (
      <MainLayout>
          <Row>
            <Col span={12}>
                <Card>
                    <DefaultForm />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Inputs />
                </Card>
            </Col>
          </Row>
      </MainLayout>
  );
};

export default FormDemo;