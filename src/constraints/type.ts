

export interface dataType{
    id: number;
    title: string;
    body: string;
}

export interface stateType{
    data: dataType[];
}

export interface actionType{
    type: string;
    payload: dataType;
}

export type DispatchType = (obj: actionType)=> actionType;