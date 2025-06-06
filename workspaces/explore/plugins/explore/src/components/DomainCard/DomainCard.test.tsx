/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DomainEntity } from '@backstage/catalog-model';
import { entityRouteRef } from '@backstage/plugin-catalog-react';
import { renderInTestApp } from '@backstage/test-utils';
import { screen } from '@testing-library/react';
import { DomainCard } from './DomainCard';

describe('<DomainCard />', () => {
  it('renders a domain card', async () => {
    const entity: DomainEntity = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Domain',
      metadata: {
        name: 'artists',
        description: 'Everything about artists',
        tags: ['a-tag'],
      },
      spec: {
        owner: 'guest',
      },
    };
    const { getByText } = await renderInTestApp(
      <DomainCard entity={entity} />,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name': entityRouteRef,
        },
      },
    );

    expect(getByText('artists')).toBeInTheDocument();
    expect(getByText('Everything about artists')).toBeInTheDocument();
    expect(getByText('a-tag')).toBeInTheDocument();
    expect(getByText('Explore').parentElement).toHaveAttribute(
      'href',
      '/catalog/default/domain/artists',
    );
  });

  it('renders a domain card with custom title', async () => {
    const entity: DomainEntity = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Domain',
      metadata: {
        name: 'artists',
        title: 'my Custom Title',
      },
      spec: {
        owner: 'guest',
      },
    };
    const { getByText } = await renderInTestApp(
      <DomainCard entity={entity} />,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name': entityRouteRef,
        },
      },
    );

    expect(getByText('Explore').parentElement).toHaveAttribute(
      'href',
      '/catalog/default/domain/artists',
    );
    expect(getByText('my Custom Title')).toBeInTheDocument();
    expect(screen.queryByText('artists')).not.toBeInTheDocument();
  });
});
