'use client';
import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { BrandCTAComponentProps } from '.';
import Link from 'next/link';
import clsx from 'clsx';
import CarbonIcon from '@/components/CarbonIcon';

export type SpacingOptionType = {
  label: string;
  value: string;
};

export const BrandCTAComponent: FC<BrandCTAComponentProps> = props => {
  const { context, component, ctaParameters, topSpacing, bottomSpacing, iconName, rightIconPlacement } = props;
  const { className, type, size } = ctaParameters || {
    className: '',
    type: 'primary',
    size: 'lg',
  };

  const sizeClasses = clsx({
    'p-Button-sm': size === 'sm' && type !== 'tertiary',
    'p-Button-lg': size === 'lg' && type !== 'tertiary',
    'font-type-CTA-primary-sm': size === 'sm',
    'font-type-CTA-primary-lg': size === 'lg' || !size,
    [`mt-${topSpacing?.label}`]: !!topSpacing,
    [`mb-${bottomSpacing?.label}`]: !!bottomSpacing,
    'flex-row-reverse': rightIconPlacement,
  });

  return (
    <>
      <Link href={'/'} className={classNames(sizeClasses, className)}>
        {iconName && <CarbonIcon iconName={iconName} />}

        <UniformText parameterId="label" component={component} context={context} />
      </Link>
    </>
  );
};
