/*
 * Copyright 2024 The Backstage Authors
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
import type { CSSProperties, ReactElement } from 'react';

const VirtualMachineIcon = ({
  style,
  x,
  y,
}: {
  style: CSSProperties;
  x: number;
  y: number;
}): ReactElement => {
  return (
    <svg
      viewBox="0 64 1170 1024"
      x={x?.toString()}
      y={y?.toString()}
      height={style?.height}
      width={style?.width}
    >
      <path
        d="M73.143 950.857h-73.143v-73.143c0-4.571 0-7.543 0-7.543h73.143v80.686zM0 801.6h73.143v-137.143h-73.143v137.143zM0 390.171v-24.914h73.143c21.486 0 39.086 0 39.086 0v73.143h-112.229v-48.229zM0 595.886h73.143v-137.143h-73.143v137.143zM536.457 950.857h137.143v-73.143h-137.143v73.143zM330.743 950.857h137.143v-73.143h-137.143v73.143zM742.171 950.857h137.143v-73.143h-137.143v73.143zM125.029 950.857h137.143v-73.143h-137.143v73.143zM797.943 438.4h81.371v-73.143h-81.371v73.143zM806.171 626.743h73.143v-137.143h-73.143v137.143zM386.514 438.4h137.143v-73.143h-137.143v73.143zM592.229 438.4h137.143v-73.143h-137.143v73.143zM1014.171 804.571h-134.857v27.886h-73.143v-27.886h-659.657v-181.943h-0.229v-477.714h0.229v-72h438.857v-72.914h-219.886v-73.143h585.829v72.914h-219.886v72.914l438.857 0.229v731.657h-156.114zM1024.229 219.886h-730.971v145.371h24.686v73.143h-24.686v184.229h-0.686v35.2h731.657v-437.943z"
        transform="rotate(180 0 512) scale(-1 1)"
      />
    </svg>
  );
};

export default VirtualMachineIcon;
