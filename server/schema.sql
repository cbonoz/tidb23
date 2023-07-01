begin;


# -- Path: server/schema.sql
CREATE TABLE name_results (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    gender VARCHAR(10) NOT NULL,
    description TEXT NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    attributes TEXT NOT NULL,
    result JSON NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

end;