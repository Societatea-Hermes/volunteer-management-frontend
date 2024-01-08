export {};

declare global {
    type Candidate = {
        first_name: string;
        last_name: string;
        personal_email: string;
        phone: string;
        address: string;
        birthday: Date;
        gender: string;
        studies_type: string;
        specialization: string;
        study_group: string;
        study_language: string;
        facebook_profile: string;
        instagram_profile: string;
        recruitment_status: string;
        recruitment_campaign_id: string;
    };

    type Volunteer = {
        first_name: string;
        last_name: string;
        personal_email: string;
        phone: string;
        address: string;
        birthday: Date;
        gender: string;
        studies_type: string;
        specialization: string;
        study_group: string;
        study_language: string;
        facebook_profile: string;
        instagram_profile: string;
        email: string;
        active: boolean;
        department: string;
        aux_member: boolean;
        vegetarian: boolean;
        shirt_size: string;
        recruitment_campaign_id: string;
    };

    type RecruitmentCampaign = {
        name: string;
        start_date: Date;
        end_date: Date;
        candidates: Candidate[];
        volunteers: Volunteer[];
    }

}

