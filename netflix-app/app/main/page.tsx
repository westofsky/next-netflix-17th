'use client';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../../assets/components/Banner';
import { Button } from '../../assets/components/Button';

export default function main() {
  return (
    <Container>
      <Banner />
      <Button />
    </Container>
  );
}

const Container = styled.div``;
