import React from 'react';
import Link from 'next/link';
import HelloWorld from '../components/HelloWorld';

const Index = () => (
  <div>
    <Link href="/about">
      <button type="button">about</button>
    </Link>
    <HelloWorld />
  </div>
);

export default Index;
