import React from 'react'
import { memo } from 'react';

function Usechild() {
    console.log("Usechild called");
}

export default memo(Usechild);