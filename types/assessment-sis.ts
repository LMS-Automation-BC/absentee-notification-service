export type assessment = {
    assessment_id: number,
            name: string,
            description: string,
            assessment_cat_id: number,
            assessment_cat_name: string,
            total_points: number,
            passing_points: number,
            start_date:string ,
            end_date:string,
            cce_enabled: string,
            counts_in_overall: string,
            weight: number,
            is_published: string,
            is_locked: string,
            scale_type: string,
            scale_name: string ,
            applied_to: string
}