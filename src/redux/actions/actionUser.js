export const UPDATENOMBRE = 'UPDATENOMBRE'

export const updatenombre=(nombre)=>{
    return{
        type: UPDATENOMBRE,
        payload: {
            name: nombre
        }
    }
}