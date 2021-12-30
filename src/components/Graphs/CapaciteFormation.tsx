import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts"
import { theme } from "../../App"
import { DataType } from "../../type/DataType"

export interface CapaciteFormationProps {
    selectedRows: DataType[]
}
export const CapaciteFormation = (props: CapaciteFormationProps) => {
    return <ResponsiveContainer width="100%" height={300}><BarChart data={props.selectedRows}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Établissement" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Capacité de l’établissement par formation" fill={theme.palette.secondary.main} />
  </BarChart></ResponsiveContainer>
}
