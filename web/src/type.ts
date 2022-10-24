export interface Pagination {
    current_page: number;
    total_pages: number;
    pages: number[];
    has_previous: boolean;
    has_next: boolean;
    prev_page: boolean;
    next_page: boolean;
    results_found: number;
}

export interface Advocate {
    profile_pic: string;
    username: string;
    name: string;
    bio: string;
    twitter: string;
    companies: number[];
    follower_count: number;
}

export interface IAdvocate {
    pagination: Pagination;
    total: number;
    advocates: Advocate[];
}

