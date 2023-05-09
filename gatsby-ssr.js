import React from 'react';
import Layout from './src/components/Layout/Layout';
import Wrapper from './src/components/Layout/Wrapper';

export const wrapRootElement = ({ element }) => {
    return <Wrapper>
        <Layout>
            {element}
        </Layout>
    </Wrapper>
};