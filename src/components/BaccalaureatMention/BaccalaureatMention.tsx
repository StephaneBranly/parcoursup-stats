import { StatsCard } from 'components'
import { ResponsiveContainer, Pie, PieChart, Legend, LabelList } from 'recharts'

export interface BaccalaureatMentionProps {
    count_tbf: number
    count_tb: number
    count_b: number
    count_ab: number
    count_sm: number
    count_nr: number
    title: string
}

const BaccalaureatMention = (props: BaccalaureatMentionProps) => {
    const {
        title,
        count_ab,
        count_b,
        count_nr,
        count_sm,
        count_tb,
        count_tbf,
    } = props

    const total =
        count_ab + count_b + count_nr + count_sm + count_tb + count_tbf

    const createLabel = (val: number): string => {
        if (!val) return ''
        return `${val}` // (${((val / total) * 100).toFixed(0)}%)`
    }

    const data = [
        {
            name: 'Très bien (avec félicitations)',
            value: count_tbf,
            fill: '#a639d6',
            label: createLabel(count_tbf),
        },
        {
            name: 'Très bien',
            value: count_tb,
            fill: '#e63946',
            label: createLabel(count_tb),
        },
        {
            name: 'Bien',
            value: count_b,
            fill: '#a8dadc',
            label: createLabel(count_b),
        },
        {
            name: 'Assez bien',
            value: count_ab,
            fill: '#457b9d',
            label: createLabel(count_ab),
        },
        {
            name: 'Sans mention',
            value: count_sm,
            fill: '#0e2950',
            label: createLabel(count_sm),
        },
        {
            name: 'Non référencé',
            value: count_nr,
            fill: '#2e2e2e',
            label: createLabel(count_nr),
        },
    ]

    return (
        <StatsCard title={title}>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        isAnimationActive={false}
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                        labelLine={false}
                    >
                        <LabelList
                            position="outside"
                            fontSize={20}
                            offset={6}
                            fill="#000"
                            stroke="#000"
                            strokeWidth={1}
                            dataKey="label"
                        />
                    </Pie>
                    <Legend
                        iconSize={10}
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                    />
                </PieChart>
            </ResponsiveContainer>
        </StatsCard>
    )
}

export default BaccalaureatMention
